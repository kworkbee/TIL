export const data = {
  "key": "v-49bbc5f2",
  "path": "/Git/Major-Commands.html",
  "title": "Git Major Commands",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "commit",
      "slug": "commit",
      "children": [
        {
          "level": 3,
          "title": "commit --amend",
          "slug": "commit-amend",
          "children": []
        }
      ]
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
  "filePathRelative": "Git/Major-Commands.md"
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
