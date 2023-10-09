import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '946584a0396a4e9b96f696abe34b6c8a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hanmi News',
  domain: 'hanminews.com',
  author: 'Hanmi News',

  // open graph metadata (optional)
  description: 'Hanmi News - Apple Valley Korean Community Website',

  // social usernames (optional)
  twitter: 'hanminews',
  github: 'hanminews',
  linkedin: 'hanminews',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: 'https://typeform.com', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '946584a0396a4e9b96f696abe34b6c8a'
    },
    {
      title: '타운 개시판',
      pageId: '946584a0396a4e9b96f696abe34b6c8a'
    },
    {
      title: '비지니스',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: '교회',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: '부동산',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: '뉴스 / 컬럼',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: '열락처',
      pageId: '7b515c7797bf4239a497d0b3fbc45fba'
    },
    {
      title: 'PDF 보기',
      url: '/pdf'
    }
  ]
})
