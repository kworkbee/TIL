<template><h1 id="spring-bean" tabindex="-1"><a class="header-anchor" href="#spring-bean" aria-hidden="true">#</a> [Spring] Bean</h1>
<p>Posted at 2022-02-10</p>
<hr>
<div class="custom-container tip"><p class="custom-container-title">Definition</p>
<p>스프링 프레임워크가 관리하는 인스턴스</p>
</div>
<ul>
<li>
<p>개발자가 빈으로 지정한 클래스들을 스프릥이 인스턴스로 만들어 IoC 컨테이너에 저장</p>
</li>
<li>
<p>기본적인 빈 전략 : <code>Singleton</code> (<code>@scope</code>로 조절 가능)</p>
<ul>
<li><code>Singleton</code></li>
<li><code>Prototype</code></li>
<li><code>Request</code>, <code>Session</code>, etc,.</li>
</ul>
</li>
<li>
<p>빈을 지정하는 방법</p>
<ul>
<li><code>@Bean</code>
<ul>
<li>일반 메서드 한정</li>
</ul>
</li>
<li><code>@Component</code>
<ul>
<li>클래스 전체 한정</li>
</ul>
</li>
</ul>
<details class="custom-container details"><summary>객체 생성의 책임</summary>
<p>직접 컨트롤 -&gt; @Bean
스프링 컨테이너에 위임 -&gt; @Component</p>
</details>
<ul>
<li><code>@Configuration</code></li>
<li><code>@Service</code>, <code>@Controller</code>, <code>@Repository</code></li>
</ul>
</li>
</ul>
</template>
