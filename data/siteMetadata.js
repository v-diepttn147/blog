/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Diep Tran',
  author: 'Diep Tran',
  headerTitle: 'Diep Tran',
  description: 'Thoughts and logs of an AI Engineer',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://dieptran.dev',
  siteRepo: 'https://github.com/v-diepttn147/blog',
  socialBanner: '/static/images/logo.png',
  email: 'diepttn147@gmail.com',
  github: 'https://github.com/v-diepttn147',
  linkedin: 'https://www.linkedin.com/in/diep-tran-1407',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
  utterances: 'v-diepttn147/blog', // Github repository for Utterances
}

module.exports = siteMetadata
