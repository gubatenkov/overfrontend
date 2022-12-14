import { defineConfig } from 'astro/config'
import { GLOBAL_CONFIG } from './src/config.ts'
import rehypePrettyCode from 'rehype-pretty-code'
import shikiTwoslash from 'remark-shiki-twoslash'

import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: GLOBAL_CONFIG.origin,
  markdown: {
    // shikiConfig: {
    //   // Shiki's built-in themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
    //   theme: 'material-palenight',
    //   // Note: Shiki has countless langs built-in, including .astro!
    //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    //   langs: ['js', 'jsx', 'ts', 'tsx'],
    //   // Word wrap prevent horizontal scrolling
    //   wrap: false
    // },
    syntaxHighlight: false,
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [[shikiTwoslash, {
      theme: 'material-palenight',
      onVisitHighlightedWord (node) {
        node.properties.className = ['word']
      }
    }]],
    // Preserve Astro's default plugins: GitHub-flavored Markdown and Smartypants
    // default: false
    extendDefaultPlugins: true
  },
  integrations: [
    mdx(),
    image(),
    react(),
    sitemap(),
    tailwind()
  ]
})
