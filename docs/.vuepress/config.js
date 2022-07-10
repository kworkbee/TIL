const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");
const { defaultTheme } = require("@vuepress/theme-default");
const { palettePlugin } = require('@vuepress/plugin-palette');

const {
  description
} = require('../../package')
const {
  Algorithm,
  DevOps,
  TDD,
  CS,
  Java,
  Database,
  Backend,
  Git,
  Refactoring,
} = require('./const');

module.exports = {
  title: 'Today I Learned',
  base: '/TIL/',
  description,
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
  ],
  theme: defaultTheme({
    repo: 'kworkbee/TIL',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: 'Edit',
    lastUpdated: true,
    navbar: [{
        text: 'Blog',
        link: 'https://about.g1tommy.me/'
      },
      {
        text: 'Profile',
        link: 'https://about.g1tommy.me/resume'
      }
    ],
    sidebar: [{
        text: 'CS',
        children: CS
      },
      {
        text: 'Java',
        children: Java
      },
      {
        text: 'Algorithm',
        children: Algorithm
      },
      {
        text: 'Backend',
        children: Backend
      },
      {
        text: 'DevOps',
        children: DevOps
      },
      {
        text: 'TDD',
        children: TDD
      },
      {
        text: 'Database',
        children: Database
      },
      {
        text: 'Git',
        children: Git
      },
      {
        text: 'Refactoring',
        children: Refactoring
      },
    ]
  }),
  plugins: [
    googleAnalyticsPlugin({
        id: 'G-8Y5NYKR2S4',
    }),
    palettePlugin({
      preset: 'sass'
    })
  ],
}
