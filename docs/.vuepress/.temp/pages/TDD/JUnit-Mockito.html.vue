<template><h1 id="mockito" tabindex="-1"><a class="header-anchor" href="#mockito" aria-hidden="true">#</a> Mockito</h1>
<p>Posted at 2022-01-22</p>
<hr>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p><img src="https://tecoble.techcourse.co.kr/static/a220a43d06adaa707959533541c8fbe7/40619/2020-09-19-test-double.jpg" alt="Test Double"></p>
<h3 id="test-double" tabindex="-1"><a class="header-anchor" href="#test-double" aria-hidden="true">#</a> Test Double</h3>
<ul>
<li><code>xUnit Test Patterns</code> 저자 <em>Gerard Meszaros</em>가 만든 용어로 <strong>테스트를 진행하기 어려운 경우 이를 대신해 테스트를 진행할 수 있도록 만들어주는 객체</strong>를 의미</li>
</ul>
<blockquote>
<p><em>영화 촬영 시 위험한 역할을 대신하는 스턴트 더블에서 비롯됨</em></p>
</blockquote>
<ul>
<li>e.g. 데이터베이스에서 조회한 값을 연산하는 로직을 테스트하기 위해서는 항상 데이터베이스의 영향을 받을 것이고, 이는 데이터베이스의 상태에 따라 다른 결과를 유발할 수 있다.</li>
</ul>
<p>이러한 테스트하려는 객체와 연관된 객체를 사용하기가 어렵고 모호할 때 대신해 줄 수 있는 객체를 <strong>테스트 더블</strong>이라 정의한다.</p>
<h4 id="dummy" tabindex="-1"><a class="header-anchor" href="#dummy" aria-hidden="true">#</a> Dummy</h4>
<ul>
<li>가장 기본적인 Test Double</li>
</ul>
<h4 id="stub" tabindex="-1"><a class="header-anchor" href="#stub" aria-hidden="true">#</a> Stub</h4>
<ul>
<li><a href="#dummy">Dummy</a> 객체가 실제로 동작하는 것처럼 보이게 만들어놓은 객체</li>
<li>인터페이스 / 기본 클래스가 최소한으로 구현된 상태</li>
<li>테스트에서 호출된 요청에 대해 미리 준비한 결과 제공</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StubUserRepository</span> <span class="token keyword">implements</span> <span class="token class-name">UserRepository</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token string">"Test User"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="spy" tabindex="-1"><a class="header-anchor" href="#spy" aria-hidden="true">#</a> Spy</h4>
<ul>
<li><a href="#stub">Stub</a>의 역할을 가지면서 호출된 내용에 대한 약간의 정보 기록</li>
<li>Test Double로 구현된 객체에 자기 자신이 호출되었을 때 확인이 필요한 부분을 기록하도록 구현</li>
<li>실체 객체처럼 동작시킬 수 있고, 필요한 부분에 대해서는 <a href="#stub">Stub</a>으로 만들어 동작 지정 가능</li>
</ul>
<h4 id="fake" tabindex="-1"><a class="header-anchor" href="#fake" aria-hidden="true">#</a> Fake</h4>
<h4 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h4>
<ul>
<li>Lexical Meaning of <code>Mock</code> : 무시하다, 거짓된, 가짜, 조각하기 쉬운 재료(나무 / 점토 등)를 이용해 추후 만들어질 제품의 외양을 흉내낸 모조품.
<ul>
<li>소프트웨어에서는 <code>가짜 객체</code>를 의미</li>
</ul>
</li>
<li><code>Mock Object</code>는 검사하고자 하는 코드와 맞물려 동작하는 <strong>객체들을 대신하여 동작하기 위해 만들어진 객체</strong></li>
</ul>
<h5 id="언제-mock을-사용하는가" tabindex="-1"><a class="header-anchor" href="#언제-mock을-사용하는가" aria-hidden="true">#</a> 언제 Mock을 사용하는가</h5>
<ul>
<li>테스트 작성을 위한 환경 구축이 어려운 경우</li>
<li>환경 구축을 위한 작업 시간이 많이 필요한 경우</li>
<li>특정 모듈을 갖고 있지 않아서 테스트 환경 구축이 어려운 경우</li>
<li>타 부서와의 협의, 정책이 필요한 경우</li>
<li>테스트가 특정 케이스나 순간에 의존적인 경우</li>
<li>테스트 시간이 오래 소요되는 경우</li>
</ul>
<hr>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<ul>
<li><a href="https://tecoble.techcourse.co.kr/post/2020-09-19-what-is-test-double/" target="_blank" rel="noopener noreferrer">Tecoble<ExternalLinkIcon/></a></li>
<li><a href="https://hyunalee.tistory.com/33" target="_blank" rel="noopener noreferrer">Tistory<ExternalLinkIcon/></a></li>
</ul>
</template>
