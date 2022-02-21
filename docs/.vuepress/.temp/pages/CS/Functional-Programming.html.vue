<template><h1 id="함수형-프로그래밍" tabindex="-1"><a class="header-anchor" href="#함수형-프로그래밍" aria-hidden="true">#</a> 함수형 프로그래밍</h1>
<p>Posted at 21-07-20</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<ul>
<li>
<p><code>프로그래밍 패러다임</code>은 프로그래머에게 프로그래밍의 <code>관점</code>을 갖게 하고 코드를 어떻게 작성할 지 결정하는 역할 수행</p>
</li>
<li>
<p><code>명령형</code> (Imperative) 프로그래밍</p>
<ul>
<li>프로그래밍의 <code>상태</code>와 상태를 변경시키는 <code>구문</code>의 관점에서 연산을 설명</li>
<li>알고리즘을 명시하고 목표는 명시하지 않음</li>
<li>절차지향 프로그래밍
<ul>
<li>수행되어야 할 <em>순차적</em> 처리 과정을 포함</li>
</ul>
</li>
<li>객체지향 프로그래밍
<ul>
<li>객체들의 <em>집합</em>으로 프로그램의 <em>상호작용</em>을 표현</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code>선언형</code> (Declarative) 프로그래밍</p>
<ul>
<li>어떤 방법으로 해야 하는지 (<code>How</code>)보다 무엇과 같은지 (<code>What</code>)을 설명</li>
<li>알고리즘 명시하지 않고 목표만 명시</li>
<li><strong>함수형 프로그래밍</strong>
<ul>
<li>순수 함수를 조합하고 소프트웨어를 만드는 방식</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="주요-개념" tabindex="-1"><a class="header-anchor" href="#주요-개념" aria-hidden="true">#</a> 주요 개념</h2>
<ul>
<li><code>First Object</code> (1급 객체)
<ul>
<li>다음 조건을 만족하는 객체이다.
<ul>
<li>변수나 데이터 구조 안에 담을 수 있다.</li>
<li>파라미터로 전달할 수 있다.</li>
<li>반환값으로 사용할 수 있다.</li>
<li>할당에 사용된 이름과 관계 없이 고유한 구별이 가능하다.</li>
<li>동적으로 프로퍼티 할당이 가능하다.</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>자바스크립트에서 함수는 객체이므로 <code>1급 함수</code>로 불린다.</p>
</blockquote>
<ul>
<li>고차 함수
<ul>
<li>람다 계산법에서 만들어진 용어로, 아래 조건을 만족하는 함수이다.
<ul>
<li>함수에 함수를 파라미터로 전달할 수 있다.</li>
<li>함수의 반환값으로 함수를 사용할 수 있다.</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>고차 함수는 <code>1급 함수</code>의 Subset이다.</p>
</blockquote>
<ul>
<li>불변성 (Immutability)
<ul>
<li>함수형 프로그래밍에서는 데이터가 변할 수 없다. (자바스크립트는 가능)</li>
<li>데이터 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터 복사본을 만들어 일부를 변경하고, 이 복사본을 사용해 작업을 진행</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Mutable</span>
<span class="token keyword">function</span> <span class="token function">rateMovie</span><span class="token punctuation">(</span><span class="token parameter">movie<span class="token punctuation">,</span> rating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    movie<span class="token punctuation">.</span>rating <span class="token operator">=</span> rating<span class="token punctuation">;</span>
    <span class="token keyword">return</span> movie<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">rateMovie</span><span class="token punctuation">(</span>movie1<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rating<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>movie1<span class="token punctuation">.</span>rating<span class="token punctuation">)</span> <span class="token comment">// 5</span>

<span class="token comment">// Immutable</span>
<span class="token keyword">function</span> <span class="token function">rateMovie</span><span class="token punctuation">(</span><span class="token parameter">movie<span class="token punctuation">,</span> rating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> movie<span class="token punctuation">,</span> <span class="token punctuation">{</span> rating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">rateMovie</span><span class="token punctuation">(</span>movie1<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rating<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>movie1<span class="token punctuation">.</span>rating<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0, Not changed</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote>
<p><code>const</code>와는 구분되는 특성이다. <code>const</code>의 경우 <code>Object</code> 타입 데이터가 대입된 경우 변경 가능하다.</p>
</blockquote>
<ul>
<li>
<p>순수 함수</p>
<ul>
<li>함수형 프로그래밍에 필요한 개념으로 아래 조건을 만족한다.
<ul>
<li>동일한 입력에는 항상 같은 값이 반환된다.</li>
<li>함수의 실행이 프로그램 실행에 영향을 주어서는 안된다. (No Side effect, 함수 내부에서 인자 값을 바꾸거나 프로그램 상태를 변경하는 등)</li>
</ul>
</li>
</ul>
</li>
<li>
<p>합성 함수 (Function composition)</p>
<ul>
<li>새로운 함수를 만들거나 계산하기 위해 둘 이상의 함수를 조합</li>
</ul>
</li>
</ul>
<h2 id="함수형-프로그래밍의-구현" tabindex="-1"><a class="header-anchor" href="#함수형-프로그래밍의-구현" aria-hidden="true">#</a> 함수형 프로그래밍의 구현</h2>
<ul>
<li>함수형 프로그래밍은 <code>순수 함수</code>를 조합하고 <code>공유 상태</code>, <code>변경 가능한 데이터</code>, 그리고 <code>부작용</code>을 피해 소프트웨어를 만드는 프로세스이다.</li>
<li><code>Imperative</code>가 아닌 <code>Declarative</code>이다.</li>
<li>애플리케이션 <code>상태</code>는 <code>순수 함수</code>를 통해 전달된다.</li>
</ul>
<h2 id="특징" tabindex="-1"><a class="header-anchor" href="#특징" aria-hidden="true">#</a> 특징</h2>
<ul>
<li>
<p>불변성 (Immutable)</p>
<ul>
<li>어떤 값의 상태를 변경하지 않는다 (변경은 부수 효과를 발생 - 함수형 프로그래밍에서는 이를 제한함)</li>
</ul>
</li>
<li>
<p>참조 투명성 (Referential Transparency)</p>
<ul>
<li>
<p>프로그램 변경 없이 어떤 표현식을 값으로 대체 가능</p>
</li>
<li>
<p>e.g. <code>y = f(x)</code>일 때, f(x)는 y를 대체 가능</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'G1'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Name : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p><code>console.log()</code>, <code>name</code>이라는 외부 값을 참조하고 있어 참조에 투명하지 않음, <code>name</code>이 바뀌면 <code>printName()</code> 값도 자연스럽게 변경됨</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Name : $(name}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token string">'G1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote>
<p>위의 코드로 변경하면 <code>printName</code>이 항상 일관적으로 반환하기 때문에 참조에 투명함.</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>1급 함수 (First-class Function)</p>
</li>
<li>
<p>게으른 평가 (Lazy Evaluation)</p>
<ul>
<li>값이 필요한 시점에 평가됨. 실제로 필요한 시점까지 실행하지 않아 시간이 오래 걸리는 작업도 쉽게 동작 가능</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">printValueLoop</span><span class="token punctuation">(</span><span class="token parameter">val <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> val<span class="token punctuation">;</span>
    <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">printValueLoop</span><span class="token punctuation">(</span>val <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token function">printValueLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6 ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
<h2 id="장점" tabindex="-1"><a class="header-anchor" href="#장점" aria-hidden="true">#</a> 장점</h2>
<ul>
<li>
<p>순수한 영역과 Side Effect를 분리</p>
<ul>
<li>예측 가능하게 되어 버그 발생 확률 감소 가능</li>
</ul>
</li>
<li>
<p>일급 함수 도입으로, 기능 추가 / 수정 시 관련 없는 모듈의 수정 필요 감소, 인터페이스 확장 용이</p>
<ul>
<li>클래스, 함수가 하나의 일만 하여 재사용성이 높아지고, 의존성 주입을 통한 테스트 용이</li>
</ul>
</li>
</ul>
</template>
