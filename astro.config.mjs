import rehypeToc from 'rehype-toc'
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
export default defineConfig({
  site: GLOBAL_CONFIG.origin,
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      rehypePrettyCode,
      [autolinkHeadings, anchorLink],
      [
        rehypeToc,
        {
          headings: ['h2', 'h3'],
          customizeTOC: (toc) => {
            if (toc.children[0].children.length === 0) {
              return false
            }
            const tocTitleNode = {
              type: 'element',
              tagName: 'p',
              properties: { className: 'toc-title' },
              children: [{ type: 'text', value: 'Table of Contents:' }]
            }
            toc.children = [tocTitleNode, ...toc.children]
            return toc
          },
          customizeTOCItem: (tocItem, heading) => {
            tocItem.children[0].children[0].value =
              tocItem.data.hookArgs[0].children[1].value
            return tocItem
          }
        }
      ]
    ],
    remarkPlugins: [
      [
        shikiTwoslash,
        {
          theme: 'material-palenight',
          onVisitHighlightedWord(node) {
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
