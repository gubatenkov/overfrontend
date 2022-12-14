import rss from '@astrojs/rss'
import { GLOBAL_CONFIG } from 'src/config'

const postImportResult = import.meta.glob('./posts/**/*.mdx', { eager: true })
const posts = Object.values(postImportResult)

export const get = async (): Promise<{
  body: string
}> =>
  await rss({
    // `<title>` field in output xml
    title: GLOBAL_CONFIG.siteTitle,
    // `<description>` field in output xml
    description: GLOBAL_CONFIG.siteDescription,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts.map((post: any) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishedDate
    })),
    // (optional) inject custom xml
    customData: '<language>en-us</language>'
  })
