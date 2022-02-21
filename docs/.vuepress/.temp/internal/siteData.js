export const siteData = {
  "base": "/TIL/",
  "lang": "en-US",
  "title": "Today I Learned",
  "description": "Tommy's Today I Learned",
  "head": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "meta",
      {
        "name": "og:image",
        "content": "https://h4dvprmht2.execute-api.ap-northeast-2.amazonaws.com/automated-og-image?text=Today%20I%20Learned"
      }
    ],
    [
      "script",
      {
        "async": true,
        "src": "https://www.googletagmanager.com/gtag/js?id=G-8Y5NYKR2S4"
      }
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8Y5NYKR2S4');"
      ]
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
