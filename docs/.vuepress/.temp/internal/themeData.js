export const themeData = {
  "repo": "",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": false,
  "nav": [
    {
      "text": "Github",
      "link": "https://github.com/kworkbee"
    },
    {
      "text": "Blog",
      "link": "https://about.g1tommy.me/"
    },
    {
      "text": "Profile",
      "link": "https://about.g1tommy.me/resume"
    }
  ],
  "sidebar": [
    {
      "title": "CS",
      "children": [
        "CS/OOP",
        "CS/Functional-Programming",
        "CS/Design-Pattern/Singleton",
        "CS/Design-Pattern/Adapter"
      ]
    },
    {
      "title": "Algorithm",
      "children": [
        "Algorithm/Graph",
        "Algorithm/HashTable-Collision-Solving"
      ]
    },
    {
      "title": "Backend",
      "children": [
        "Backend/Spring/Bean",
        "Backend/Spring/Filter-Interceptor"
      ]
    },
    {
      "title": "DevOps",
      "children": [
        "DevOps/TIL-with-Github-Actions",
        "DevOps/CI-CD",
        "DevOps/Multi-Tier-Architecture"
      ]
    },
    {
      "title": "TDD",
      "children": [
        "TDD/Overview",
        "TDD/JUnit",
        "TDD/JUnit-Assertions-and-Assumptions"
      ]
    },
    {
      "title": "Database",
      "children": [
        "Database/SQL"
      ]
    },
    {
      "title": "Git",
      "children": [
        "Git/Major-Commands"
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
