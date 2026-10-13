import StyleDictionary from 'style-dictionary'
import { register } from '@tokens-studio/sd-transforms'

// Register Tokens Studio transforms (W3C DTCG format, math expressions, cross-file refs)
await register(StyleDictionary)

// Debug format: dumps first token to stderr so we can see what SD v5 gives us
StyleDictionary.registerFormat({
  name: 'debug/first-token',
  format: ({ dictionary }) => {
    const tokens = dictionary.allTokens
    console.error(`\n[DEBUG] Total tokens: ${tokens.length}`)
    if (tokens.length > 0) {
      const t = tokens[0]
      console.error('[DEBUG] First token:', JSON.stringify({
        name: t.name,
        path: t.path,
        value: t.value,
        $value: t.$value,
        type: t.type,
        $type: t.$type,
        original: t.original,
      }, null, 2))
    }
    return ''
  },
})

// Main format: outputs a typed, nested TypeScript const
StyleDictionary.registerFormat({
  name: 'typescript/nested-object',
  format: ({ dictionary }) => {
    const obj = {}

    for (const token of dictionary.allTokens) {
      // value may be on token.value (SD v4) or token.$value (SD v5 DTCG mode)
      const val = token.value ?? token.$value

      // Skip composites that don't map cleanly to MUI
      const type = token.type ?? token.$type ?? token.original?.$type
      if (
        typeof val === 'object' &&
        val !== null &&
        !Array.isArray(val) &&
        type &&
        ['boxShadow', 'typography', 'shadow'].includes(type)
      ) {
        continue
      }

      // Skip tokens with no resolved value
      if (val === undefined || val === null || val === '') continue

      const path = token.path
      let node = obj
      for (let i = 0; i < path.length - 1; i++) {
        if (typeof node[path[i]] !== 'object' || node[path[i]] === null) {
          node[path[i]] = {}
        }
        node = node[path[i]]
      }
      node[path[path.length - 1]] = val
    }

    return [
      '// AUTO-GENERATED — run `pnpm tokens` from repo root to regenerate',
      '// Source: Figma via Tokens Studio → tools/tokens/tokens/',
      '// Do not edit manually.',
      '',
      `export const tokens = ${JSON.stringify(obj, null, 2)} as const`,
      '',
      'export type Tokens = typeof tokens',
      '',
    ].join('\n')
  },
})

const sd = new StyleDictionary({
  source: [
    'tokens/core.json',
    'tokens/light.json',
    'tokens/1. Primitives/Mode 1.json',
    'tokens/2. Theme/Mode 1.json',
    'tokens/3. Mode/Light.json',
  ],

  log: {
    verbosity: 'verbose',
    errors: { brokenReferences: 'warn' },
  },

  platforms: {
    debug: {
      transformGroup: 'tokens-studio',
      buildPath: '../../packages/ui/src/tokens/',
      files: [{ destination: 'debug.txt', format: 'debug/first-token' }],
    },
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: '../../packages/ui/src/tokens/',
      files: [
        {
          destination: 'index.ts',
          format: 'typescript/nested-object',
        },
      ],
    },
  },
})

await sd.buildAllPlatforms()

console.log('\n✓ Tokens generated → packages/ui/src/tokens/index.ts\n')
