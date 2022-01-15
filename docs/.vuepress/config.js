const { description } = require('../../package')
const { Algorithm, DevOps, TDD, CS, Database, Backend, Git } = require('./const');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'G1(Tommy)\'s TIL - Today I Learned',
  base: '/TIL/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:image', content: 'https://h4dvprmht2.execute-api.ap-northeast-2.amazonaws.com/automated-og-image?text=Today%20I%20Learned' }],
    [
      'script',
      {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-8Y5NYKR2S4',
      },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8Y5NYKR2S4');",
        ],
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/kworkbee',
      },
      {
        text: 'Résumé',
        link: 'https://kworkbee.github.io/resume'
      }
    ],
    sidebar: [
      {
        title: 'CS',
        children: CS
      },
      {
        title: 'Algorithm',
        children: Algorithm
      },
      {
        title: 'Backend',
        children: Backend
      },
      {
        title: 'DevOps',
        children: DevOps
      },
      {
        title: 'TDD',
        children: TDD
      },
      {
        title: 'Database',
        children: Database
      },
      {
        title: 'Git',
        children: Git
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
