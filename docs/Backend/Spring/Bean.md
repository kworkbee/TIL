# [Spring] Bean

---

::: tip Definition
스프링 프레임워크가 관리하는 인스턴스
:::

- 개발자가 빈으로 지정한 클래스들을 스프릥이 인스턴스로 만들어 IoC 컨테이너에 저장
- 기본적인 빈 전략 : `Singleton` (`@scope`로 조절 가능)
  - `Singleton`
  - `Prototype`
  - `Request`, `Session`, etc,.
- 빈을 지정하는 방법
  - `@Bean`
    - 개발자가 컨트롤이 불가능한 외부 라이브러리들을 Bean으로 등록하고 싶은 경우 사용 (수동으로 빈으로 등록)
    - 메서드 레벨에서 선언
  - `@Component`
    - **개발자가 직접 컨트롤이 가능한 클래스들의 경우** 사용
    - 클래스 레벨에서만 선언 가능 (**스프링이 런타임 시에 `ComponentScan`하여 Auto-Detect**)
  - `@Configuration`
  - `@Service`, `@Controller`, `@Repository`
  