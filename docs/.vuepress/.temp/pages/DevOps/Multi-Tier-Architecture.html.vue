<template><h1 id="multi-tier-architecture" tabindex="-1"><a class="header-anchor" href="#multi-tier-architecture" aria-hidden="true">#</a> Multi-Tier Architecture</h1>
<p>Posted at 2021-06-29</p>
<blockquote>
<p>플랫폼을 다수 계층으로 나누어 별도의 물리적(Physical) / 논리적(Logical) 장치에 구축, 운영하는 형태</p>
</blockquote>
<p>일반적으로 3-Tier (Presentation / Application / Data) 형태로 운용되는 경우가 많으며, 상황에 따라 더 많은 계층을 두거나 반대의 경우도 존재함</p>
<h2 id="presentation-tier" tabindex="-1"><a class="header-anchor" href="#presentation-tier" aria-hidden="true">#</a> Presentation Tier</h2>
<p>User Interface (UI)를 지원 - <code>Front-end</code>, 사용자와 직접 마주하는 계층</p>
<p>e.g. <code>HTML</code>, <code>Javascript</code>, <code>CSS</code>, Image Assets, etc,.</p>
<h2 id="application-tier" tabindex="-1"><a class="header-anchor" href="#application-tier" aria-hidden="true">#</a> Application Tier</h2>
<p>특정 규칙으로 바탕으로 하는 요청 정보의 가공 --&gt; 동적 데이터 제공</p>
<p>== Business Logic / Transaction Tier</p>
<p><code>Client Tier</code> 측면에서의 Application Tier는 서버와 같이 동작 (Response), <code>Data Tier</code> 측면에서의 Application Tier는 클라이언트와 같이 동작 (Request)</p>
<p>--&gt; <code>Middleware</code> or <code>Back-end</code></p>
<p>e.g. <code>PHP</code>, <code>Java</code></p>
<h2 id="data-tier" tabindex="-1"><a class="header-anchor" href="#data-tier" aria-hidden="true">#</a> Data Tier</h2>
<p>Database에 접근에 데이터를 읽고 쓰는 것을 관리함</p>
<p>Data Tier 또한 Back-end로 볼 수 있음</p>
<p>e.g. <code>DBMS</code> --&gt; <code>MySQL</code>, <code>MongoDB</code>, etc,.</p>
<h2 id="_1-tier" tabindex="-1"><a class="header-anchor" href="#_1-tier" aria-hidden="true">#</a> 1-Tier</h2>
<p><img src="@source/images/Tier/Tier.001.jpeg" alt="1-Tier"></p>
<p>하나의 물리적 서버 (컴퓨터)에 3가지 다른 기능을 함께 구현, 물리적 장비 변경 시 모든 구성의 변경 필요</p>
<h2 id="_2-tier" tabindex="-1"><a class="header-anchor" href="#_2-tier" aria-hidden="true">#</a> 2-Tier</h2>
<p><img src="@source/images/Tier/Tier.002.jpeg" alt="2-Tier"></p>
<p><code>Client Tier</code>와 <code>Data Tier</code>의 물리적 구분 --&gt; 각 계층에서의 변경은 서로에 영향을 받지 않음</p>
<p>클라이언트에 모든 로직이 존재하기 때문에 <code>재사용성</code> 측면에서 <em>바람직하지 못함</em>, <code>자원 활용</code> 측면에서도 _비효율적_이며 <code>모니터링 및 관리</code>가 <em>용이하지 못함</em></p>
<h2 id="_3-tier-1" tabindex="-1"><a class="header-anchor" href="#_3-tier-1" aria-hidden="true">#</a> 3-Tier (1)</h2>
<p><img src="@source/images/Tier/Tier.003.jpeg" alt="3-Tier"></p>
<p>각 계층 모두 물리적인 구분으로 구성 --&gt; 각 계층에서의 변화는 서로 영향 없이 독립적으로 운영</p>
<h2 id="_3-tier-2" tabindex="-1"><a class="header-anchor" href="#_3-tier-2" aria-hidden="true">#</a> 3-Tier (2)</h2>
<p><img src="@source/images/Tier/Tier.004.jpeg" alt="3-Tier (2)"></p>
<p><code>Development</code> / <code>Staging</code> / <code>Production</code> 형태로, <code>Development</code> 단계에서는 서비스 / 기능 구현 후 <code>Staging</code> 단계에서 자체 테스트를 거친다. 이상이 없는 경우 <code>Production</code> 단계로 Migration 하여 서비스하는 형태 --&gt; 각 단계는 <code>백업</code>하는 구성일 뿐 아니라 각 기능 혹은 서비스에 대한 테스트를 거치고 업데이트 하는 <code>버전 관리 구성</code>도 가능</p>
<h2 id="pros-and-cons-of-implementing-3-tier-architecture" tabindex="-1"><a class="header-anchor" href="#pros-and-cons-of-implementing-3-tier-architecture" aria-hidden="true">#</a> Pros and Cons of Implementing 3-Tier Architecture</h2>
<ul>
<li>
<p>장점</p>
<ul>
<li>
<p>물리적 (혹은 논리적) 서버 구성을 통한 리스크 완화 --&gt; <code>백업 구성</code>이나 <code>이중화</code> 등의 가능</p>
</li>
<li>
<p>여러 대의 서버로 나누어 계층 동작 --&gt; 서버 부하 감소</p>
</li>
<li>
<p>경우에 따른 서버 <code>Scale-up</code> 고려 가능</p>
</li>
<li>
<p>계층별 업무 분담으로 효율성 증가</p>
</li>
</ul>
</li>
<li>
<p>단점</p>
<ul>
<li>
<p>관리의 복잡도 상승</p>
</li>
<li>
<p>장애 발생 포인트 증가</p>
</li>
<li>
<p>서비스 규모와 사용자 규모에 따른 비용 고려 필요</p>
</li>
</ul>
</li>
</ul>
</template>
