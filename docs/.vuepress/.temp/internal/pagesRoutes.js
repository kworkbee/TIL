import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-21b93ea4","/Algorithm/Graph.html",{"title":"Graph"},["/Algorithm/Graph","/Algorithm/Graph.md"]],
  ["v-57a8ca84","/Algorithm/HashTable-Collision-Solving.html",{"title":"HashTable Collision 해결"},["/Algorithm/HashTable-Collision-Solving","/Algorithm/HashTable-Collision-Solving.md"]],
  ["v-6861e33b","/Backend/Vault.html",{"title":"Vault"},["/Backend/Vault","/Backend/Vault.md"]],
  ["v-03f74244","/CS/Functional-Programming.html",{"title":"함수형 프로그래밍"},["/CS/Functional-Programming","/CS/Functional-Programming.md"]],
  ["v-f896dae2","/CS/OOP.html",{"title":"OOP"},["/CS/OOP","/CS/OOP.md"]],
  ["v-6f982406","/Database/SQL.html",{"title":"SQL"},["/Database/SQL","/Database/SQL.md"]],
  ["v-15fedf7a","/Git/Cherry-pick.html",{"title":"Cherry-pick"},["/Git/Cherry-pick","/Git/Cherry-pick.md"]],
  ["v-49bbc5f2","/Git/Major-Commands.html",{"title":"Git Major Commands"},["/Git/Major-Commands","/Git/Major-Commands.md"]],
  ["v-106e57aa","/DevOps/CI-CD.html",{"title":"CI / CD"},["/DevOps/CI-CD","/DevOps/CI-CD.md"]],
  ["v-b7b9d7b0","/DevOps/Multi-Tier-Architecture.html",{"title":"Multi-Tier Architecture"},["/DevOps/Multi-Tier-Architecture","/DevOps/Multi-Tier-Architecture.md"]],
  ["v-b6690524","/DevOps/TIL-with-Github-Actions.html",{"title":"TIL with Github Actions"},["/DevOps/TIL-with-Github-Actions","/DevOps/TIL-with-Github-Actions.md"]],
  ["v-43ffac70","/TDD/JUnit-Assertions-and-Assumptions.html",{"title":"JUnit5 Assertions & Assumptions"},["/TDD/JUnit-Assertions-and-Assumptions","/TDD/JUnit-Assertions-and-Assumptions.md"]],
  ["v-3cbf2932","/TDD/JUnit-Mockito.html",{"title":"Mockito"},["/TDD/JUnit-Mockito","/TDD/JUnit-Mockito.md"]],
  ["v-0714f8ff","/TDD/JUnit.html",{"title":"JUnit"},["/TDD/JUnit","/TDD/JUnit.md"]],
  ["v-46de6c87","/TDD/JUnit5-Annotations.html",{"title":"JUnit5 Annotations"},["/TDD/JUnit5-Annotations","/TDD/JUnit5-Annotations.md"]],
  ["v-c2036be8","/TDD/Overview.html",{"title":"TDD Overview"},["/TDD/Overview","/TDD/Overview.md"]],
  ["v-39c8ebdb","/Backend/Spring/Bean.html",{"title":"[Spring] Bean"},["/Backend/Spring/Bean","/Backend/Spring/Bean.md"]],
  ["v-192a0e4a","/Backend/Spring/Filter-Interceptor.html",{"title":"[Spring] Filter & Interceptor"},["/Backend/Spring/Filter-Interceptor","/Backend/Spring/Filter-Interceptor.md"]],
  ["v-ca29181c","/CS/Design-Pattern/Adapter.html",{"title":"[Design Pattern] Adapter"},["/CS/Design-Pattern/Adapter","/CS/Design-Pattern/Adapter.md"]],
  ["v-3b65da94","/CS/Design-Pattern/Singleton.html",{"title":"[Design Pattern] Singleton"},["/CS/Design-Pattern/Singleton","/CS/Design-Pattern/Singleton.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
