<template><h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h1>
<p>Posted at 21-07-18</p>
<hr>
<h2 id="subqueries" tabindex="-1"><a class="header-anchor" href="#subqueries" aria-hidden="true">#</a> Subqueries</h2>
<h3 id="scalar-subquery" tabindex="-1"><a class="header-anchor" href="#scalar-subquery" aria-hidden="true">#</a> Scalar Subquery</h3>
<ul>
<li><code>SELECT</code> clause에서 사용하는 서브쿼리</li>
<li>결과가 <code>하나의 행</code>으로 구성</li>
</ul>
<h3 id="inline-view" tabindex="-1"><a class="header-anchor" href="#inline-view" aria-hidden="true">#</a> Inline View</h3>
<ul>
<li><code>FROM</code> clause에서 사용하는 서브쿼리</li>
</ul>
<h3 id="nested-subquery" tabindex="-1"><a class="header-anchor" href="#nested-subquery" aria-hidden="true">#</a> (Nested) Subquery</h3>
<ul>
<li><code>WHERE</code> clause에서 사용하는 서브쿼리</li>
<li>단일 / 복수 여부에 따라 단일행 / 복수행 서브쿼리로 명명</li>
</ul>
<blockquote>
<p>일반적으로 서브 쿼리보다 JOIN을 사용하는 것이 퍼포먼스가 더 나음</p>
</blockquote>
<hr>
<h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h2>
<h3 id="cartesian-product-cross-join" tabindex="-1"><a class="header-anchor" href="#cartesian-product-cross-join" aria-hidden="true">#</a> Cartesian Product (Cross Join)</h3>
<ul>
<li><code>FROM</code> clause에 multi table이 존재하고, 이들 테이블 간의 JOIN 조건이 기술되지 않은 경우 테이블 간 모든 행이 무조건적으로 결합하여, 결과적으로 테이블에 존재하는 행 갯수를 곱한 만큼의 결과값이 반환되는 것을 일컫음</li>
</ul>
<h3 id="equi-inner-join" tabindex="-1"><a class="header-anchor" href="#equi-inner-join" aria-hidden="true">#</a> Equi (Inner) Join</h3>
<ul>
<li>양쪽 테이블에서 조인 조건이 일치하는 행만 가져옴
--&gt; <code>Equality Condition (=)</code> 에 의한 Join</li>
<li><code>ON</code> clause가 없으면 <code>CROSS</code> Join과 동일한 결과 출력</li>
</ul>
<h4 id="natural-join" tabindex="-1"><a class="header-anchor" href="#natural-join" aria-hidden="true">#</a> Natural Join</h4>
<ul>
<li>동일한 열이 있으면 자동 JOIN --&gt; <code>ON</code> clause 생략 가능</li>
<li>다른 테이블에 동일한 열이 여러 개일 경우 원하는 JOIN이 불가능</li>
</ul>
<h3 id="non-equi-join" tabindex="-1"><a class="header-anchor" href="#non-equi-join" aria-hidden="true">#</a> Non Equi Join</h3>
<ul>
<li>테이블의 어떤 Column도 Join할 테이블의 column에 일치하지 않을 때 사용</li>
<li>Join 조건은 Equality 이외 연산자를 가짐</li>
<li>BETWEEN, AND, IS NULL, IS NOT NULL, IN, NOT IN</li>
</ul>
<h3 id="outer-join" tabindex="-1"><a class="header-anchor" href="#outer-join" aria-hidden="true">#</a> Outer Join</h3>
<ul>
<li>두 개 이상의 테이블에서 교집합과 조건을 만족하지 못한 특정시킨 Join 테이블의 행도 포함</li>
<li>조건을 만족하지 않는 행도 가져옴</li>
<li>외부 조인하려는 한쪽 column에 <code>(+)</code> 표기</li>
<li><code>LEFT</code>, <code>RIGHT</code>, <code>FULL</code></li>
</ul>
<h3 id="self-join" tabindex="-1"><a class="header-anchor" href="#self-join" aria-hidden="true">#</a> Self Join</h3>
<ul>
<li>자신의 테이블을 join</li>
<li>별칭을 사용</li>
</ul>
<h3 id="semi-join" tabindex="-1"><a class="header-anchor" href="#semi-join" aria-hidden="true">#</a> Semi Join</h3>
<ul>
<li>서브쿼리를 사용해 서브쿼리에 존재하는 데이터만 메인쿼리에서 추출</li>
<li><code>IN</code>, <code>EXIST</code>를 사용한 조인</li>
<li><code>1:N</code>의 관계를 가진다</li>
</ul>
<h3 id="anti-join" tabindex="-1"><a class="header-anchor" href="#anti-join" aria-hidden="true">#</a> Anti Join</h3>
<ul>
<li>서브쿼리의 테이블에는 없는 메인 쿼리 테이블의 데이터만 추출</li>
<li><code>NOT IN</code>, <code>NOT EXIST</code> 사용</li>
</ul>
</template>
