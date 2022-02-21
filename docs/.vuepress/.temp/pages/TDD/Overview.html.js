export const data = {
  "key": "v-c2036be8",
  "path": "/TDD/Overview.html",
  "title": "TDD Overview",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "장점",
      "slug": "장점",
      "children": []
    }
  ],
  "git": {
    "contributors": [
      {
        "name": "G1",
        "email": "g1.jeon@kakao.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "TDD/Overview.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
