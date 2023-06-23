const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  },
  async redirects() {
    return [
      {
        source: '/host/drupal-hosting-for-evaluation-and-production',
        destination: '/deploy/drupal-hosting-for-evaluation-and-production',
        permanent: true,
      },
      {
        source: '/build/common-site-building-tasks',
        destination: '/build/site-building/configuration',
        permanent: true,
      },
      {
        source: '/build/content-model',
        destination: '/build/site-building/content-model',
        permanent: true,
      },
      {
        source: '/build/normalize-naming',
        destination: '/build/site-building/normalize-naming',
        permanent: true,
      },
      {
        source: '/build/security-updates',
        destination: '/build/site-building/security-updates',
        permanent: true,
      },
    ]
  },
})
