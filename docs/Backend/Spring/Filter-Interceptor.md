# [Spring] Filter & Interceptor

---

## Overview

- 세션 처리, 권한 체크, XSS 방어 등 **공통적으로 처리해야 하는 업무를 별도로 분리하고 관리**하여 코드 중복 문제를 해결

    - `Filter`, `Interceptor`, `AOP`

![Spring MVC Request Lifecycle](https://nesoy.github.io/assets/posts/img/2019-02-18-20-20-08.png)
[Figure] Spring MVC Request Lifecycle (Refered from [https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1](https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1))

## Filter

- 요청과 응답을 정제하는 역할
- 요청 내용을 변경하거나 여러 가지 확인 수행
- 응답 내용에 대한 변경 처리

### Methods

- `init()` : 필터 인스턴스 초기화
- `doFilter()` : 실제 처리
- `destroy()` : 필터 인스턴스 종료

## Interceptor

- 요청에 대한 작업 전/후를 가로챈다
- `Filter`와 유사
    - `Filter`는 스프링 컨텍스트 외부에 존재해 스프링과 무관한 자원에 대해 동작
    - `Interceptor`는 스프링 컨텍스트 내부에서 `Handler`에 관한 요청과 응답에 대해 처리
- 여러 개의 `Interceptor` 사용이 가능하다
- `Spring Context`에 등록됨
- `AOP`와 유사한 기능 제공
- `인증`, `로깅` 등에 사용

### Methdos

- `preHandler()` : 컨트롤러 실행 전
- `postHandler()` : 컨트롤러 실행 후 View 렌더링 이전
- `afterCompletion()` : View 렌더링 이후

![Filter, Interceptor Flow](https://media.vlpt.us/images/miscaminos/post/3daf3903-871d-4d90-9825-fb6b52005884/filter_interceptor_aop.jpg)
[Figure] Filter, Interceptor Flow (Refered from [https://velog.io/@miscaminos/Filter-Interceptor](https://velog.io/@miscaminos/Filter-Interceptor))

## AOP

> Aspect Oriented Programming (관점 지향 프로그래밍)

- 객체지향 프로그래밍을 할 때, 중복을 줄일 수 없는 부분을 줄이기 위해 `관점`에서 바라보고 처리
- 로깅, 트랜잭션, 에러 처리와 같이 비즈니스 단 메서드에서 세밀한 조정이 요구될 때 사용
- `Filter`, `Interceptor`와 다르게 메서드 전후 지점에 자유롭게 설정 가능

### 주요 개념

- `Aspect`
    - 흩어진 관심사의 모듈화 (주로 부가기능)
- `Advice`
    - 공통 관심 기능을 핵심 로직에 적용하는 시점 정의
    - 타겟에 제공할 부가기능을 담고 있는 모듈
    - 종류
        - `Before` : target 메서드 호출 전
        - `After` : target 메서드 호출 이후 (예외 발생 무관)
        - `After-throwing` : target 예외 발생 후
        - `After-returning` : target 메서드 호출 이후
        - `Around` : target 메서드 호출 전후 모두 적용
- `Pointcut`
    - 적용 위치
- `Target`
    - 적용이 되는 대상
- `JoinPoint`
    - `Advice`가 적용될 위치

### 특징

- Proxy 패턴 방식을 통해 구현
    - 접근 제어 및 부가 기능 추가 위함
- 스프링 빈에만 AOP 적용 가능
- 중복 코드, 객체 간 관계 복잡도 증가, 프록시 클래스 작성의 번거로움 등에 관한 해결 목적