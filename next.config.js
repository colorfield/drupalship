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
    ]
  },
})
