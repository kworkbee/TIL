# [Spring] Bean

Posted at 2022-02-10

---

::: tip Definition
스프링 프레임워크가 관리하는 인스턴스
:::

- 개발자가 빈으로 지정한 클래스들을 스프릥이 인스턴스로 만들어 IoC 컨테이너에 저장
- 기본적인 빈 전략 : `Singleton` (@scope로 조절 가능)
  - Singleton
  - Prototype
  - Requst, Session, etc,.
- 빈을 지정하는 방법
  - @Bean
  - @Component
  - @Configuration
  - @Service, @Controller, @Repository
  