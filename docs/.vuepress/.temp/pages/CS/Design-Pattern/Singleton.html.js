export const data = {
  "key": "v-3b65da94",
  "path": "/CS/Design-Pattern/Singleton.html",
  "title": "[Design Pattern] Singleton",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is Singleton?",
      "slug": "what-is-singleton",
      "children": [
        {
          "level": 3,
          "title": "Early Iniitalization (Thread-safe)",
          "slug": "early-iniitalization-thread-safe",
          "children": []
        },
        {
          "level": 3,
          "title": "Lazy Initialization (Using Synchronized keyword, Thread-safe)",
          "slug": "lazy-initialization-using-synchronized-keyword-thread-safe",
          "children": []
        },
        {
          "level": 3,
          "title": "Lazy Initialization (Using DCL (Double Checking Locking), Thread-safe)",
          "slug": "lazy-initialization-using-dcl-double-checking-locking-thread-safe",
          "children": []
        },
        {
          "level": 3,
          "title": "Lazy Initialization (Using Enum, Thread-safe)",
          "slug": "lazy-initialization-using-enum-thread-safe",
          "children": []
        },
        {
          "level": 3,
          "title": "Lazy Initialization (Using Holder, Thread-safe)",
          "slug": "lazy-initialization-using-holder-thread-safe",
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
  "filePathRelative": "CS/Design-Pattern/Singleton.md"
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
