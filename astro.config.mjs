import { defineConfig } from 'astro/config'
import { GLOBAL_CONFIG } from './src/config.ts'
import rehypePrettyCode from 'rehype-pretty-code'
import shikiTwoslash from 'remark-shiki-twoslash'
import autolinkHeadings from 'rehype-autolink-headings'
import { anchorLink } from './plugins/rehypeAnchorLink'

import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: GLOBAL_CONFIG.origin,
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypePrettyCode, [autolinkHeadings, anchorLink]],
    remarkPlugins: [
      [
        shikiTwoslash,
        {
          theme: 'material-palenight',
          onVisitHighlightedWord (node) {
            node.properties.className = ['word']
          }
        }
      ]
    ],
    // Preserve Astro's default plugins: GitHub-flavored Markdown and Smartypants
    // default: false
    extendDefaultPlugins: true
  },
  integrations: [mdx(), image(), react(), sitemap(), robotsTxt({}), tailwind()]
})
