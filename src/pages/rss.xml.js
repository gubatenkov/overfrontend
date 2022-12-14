import rss from '@astrojs/rss'
import { GLOBAL_CONFIG } from '../config'

export const get = () =>
  rss({
    title: GLOBAL_CONFIG.siteTitle,
    description: GLOBAL_CONFIG.siteDescription,
    site: import.meta.env.SITE,
    items: import.meta.glob('./posts/**/*.{md,mdx}')
  })
