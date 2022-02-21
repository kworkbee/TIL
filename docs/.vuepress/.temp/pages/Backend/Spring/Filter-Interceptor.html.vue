<template><h1 id="spring-filter-interceptor" tabindex="-1"><a class="header-anchor" href="#spring-filter-interceptor" aria-hidden="true">#</a> [Spring] Filter &amp; Interceptor</h1>
<p>Posted at 21-07-21</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<ul>
<li>
<p>세션 처리, 권한 체크, XSS 방어 등 <strong>공통적으로 처리해야 하는 업무를 별도로 분리하고 관리</strong>하여 코드 중복 문제를 해결</p>
<ul>
<li><code>Filter</code>, <code>Interceptor</code>, <code>AOP</code></li>
</ul>
</li>
</ul>
<p><img src="https://nesoy.github.io/assets/posts/img/2019-02-18-20-20-08.png" alt="Spring MVC Request Lifecycle">
[Figure] Spring MVC Request Lifecycle (Refered from <a href="https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1" target="_blank" rel="noopener noreferrer">https://nesoy.github.io/articles/2019-02/Spring-request-lifecycle-part-1<ExternalLinkIcon/></a>)</p>
<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2>
<ul>
<li>요청과 응답을 정제하는 역할</li>
<li>요청 내용을 변경하거나 여러 가지 확인 수행</li>
<li>응답 내용에 대한 변경 처리</li>
</ul>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
<ul>
<li><code>init()</code> : 필터 인스턴스 초기화</li>
<li><code>doFilter()</code> : 실제 처리</li>
<li><code>destroy()</code> : 필터 인스턴스 종료</li>
</ul>
<h2 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> Interceptor</h2>
<ul>
<li>요청에 대한 작업 전/후를 가로챈다</li>
<li><code>Filter</code>와 유사
<ul>
<li><code>Filter</code>는 스프링 컨텍스트 외부에 존재해 스프링과 무관한 자원에 대해 동작</li>
<li><code>Interceptor</code>는 스프링 컨텍스트 내부에서 <code>Handler</code>에 관한 요청과 응답에 대해 처리</li>
</ul>
</li>
<li>여러 개의 <code>Interceptor</code> 사용이 가능하다</li>
<li><code>Spring Context</code>에 등록됨</li>
<li><code>AOP</code>와 유사한 기능 제공</li>
<li><code>인증</code>, <code>로깅</code> 등에 사용</li>
</ul>
<h3 id="methdos" tabindex="-1"><a class="header-anchor" href="#methdos" aria-hidden="true">#</a> Methdos</h3>
<ul>
<li><code>preHandler()</code> : 컨트롤러 실행 전</li>
<li><code>postHandler()</code> : 컨트롤러 실행 후 View 렌더링 이전</li>
<li><code>afterCompletion()</code> : View 렌더링 이후</li>
</ul>
<p><img src="https://media.vlpt.us/images/miscaminos/post/3daf3903-871d-4d90-9825-fb6b52005884/filter_interceptor_aop.jpg" alt="Filter, Interceptor Flow">
[Figure] Filter, Interceptor Flow (Refered from <a href="https://velog.io/@miscaminos/Filter-Interceptor" target="_blank" rel="noopener noreferrer">https://velog.io/@miscaminos/Filter-Interceptor<ExternalLinkIcon/></a>)</p>
<h2 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h2>
<blockquote>
<p>Aspect Oriented Programming (관점 지향 프로그래밍)</p>
</blockquote>
<ul>
<li>객체지향 프로그래밍을 할 때, 중복을 줄일 수 없는 부분을 줄이기 위해 <code>관점</code>에서 바라보고 처리</li>
<li>로깅, 트랜잭션, 에러 처리와 같이 비즈니스 단 메서드에서 세밀한 조정이 요구될 때 사용</li>
<li><code>Filter</code>, <code>Interceptor</code>와 다르게 메서드 전후 지점에 자유롭게 설정 가능</li>
</ul>
<h3 id="주요-개념" tabindex="-1"><a class="header-anchor" href="#주요-개념" aria-hidden="true">#</a> 주요 개념</h3>
<ul>
<li><code>Aspect</code>
<ul>
<li>흩어진 관심사의 모듈화 (주로 부가기능)</li>
</ul>
</li>
<li><code>Advice</code>
<ul>
<li>공통 관심 기능을 핵심 로직에 적용하는 시점 정의</li>
<li>타겟에 제공할 부가기능을 담고 있는 모듈</li>
<li>종류
<ul>
<li><code>Before</code> : target 메서드 호출 전</li>
<li><code>After</code> : target 메서드 호출 이후 (예외 발생 무관)</li>
<li><code>After-throwing</code> : target 예외 발생 후</li>
<li><code>After-returning</code> : target 메서드 호출 이후</li>
<li><code>Around</code> : target 메서드 호출 전후 모두 적용</li>
</ul>
</li>
</ul>
</li>
<li><code>Pointcut</code>
<ul>
<li>적용 위치</li>
</ul>
</li>
<li><code>Target</code>
<ul>
<li>적용이 되는 대상</li>
</ul>
</li>
<li><code>JoinPoint</code>
<ul>
<li><code>Advice</code>가 적용될 위치</li>
</ul>
</li>
</ul>
<h3 id="특징" tabindex="-1"><a class="header-anchor" href="#특징" aria-hidden="true">#</a> 특징</h3>
<ul>
<li>Proxy 패턴 방식을 통해 구현
<ul>
<li>접근 제어 및 부가 기능 추가 위함</li>
</ul>
</li>
<li>스프링 빈에만 AOP 적용 가능</li>
<li>중복 코드, 객체 간 관계 복잡도 증가, 프록시 클래스 작성의 번거로움 등에 관한 해결 목적</li>
</ul>
</template>
