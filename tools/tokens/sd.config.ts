import StyleDictionary from 'style-dictionary'
import { registerTransforms } from '@tokens-studio/sd-transforms'

// Register Tokens Studio transforms so Style Dictionary understands
// the JSON format that Tokens Studio exports from Figma.
registerTransforms(StyleDictionary)

// Custom format: outputs a typed, nested TypeScript object instead of
// flat CSS variables — matches the structure expected by theme/index.ts.
StyleDictionary.registerFormat({
  name: 'typescript/nested-object',
  format: ({ dictionary }) => {
    const obj: Record<string, unknown> = {}

    for (const token of dictionary.allTokens) {
      const path = token.path as string[]
      let node = obj
      for (let i = 0; i < path.length - 1; i++) {
        if (typeof node[path[i]] !== 'object') {
          node[path[i]] = {}
        }
        node = node[path[i]] as Record<string, unknown>
      }
      node[path[path.length - 1]] = token.value
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
  // Drop your Figma Tokens Studio export JSON files here.
  // Export from Figma: Tokens Studio plugin → Export → JSON
  source: ['tokens/**/*.json'],

  // Tokens Studio preprocessor handles the $value/$type format
  preprocessors: ['tokens-studio'],

  platforms: {
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
