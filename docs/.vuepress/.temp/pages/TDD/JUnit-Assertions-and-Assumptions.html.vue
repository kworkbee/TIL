<template><h1 id="junit5-assertions-assumptions" tabindex="-1"><a class="header-anchor" href="#junit5-assertions-assumptions" aria-hidden="true">#</a> JUnit5 Assertions &amp; Assumptions</h1>
<p>Posted at 2022-01-22</p>
<hr>
<h2 id="assertions" tabindex="-1"><a class="header-anchor" href="#assertions" aria-hidden="true">#</a> Assertions</h2>
<blockquote>
<p>단정문, <strong>성공하지 않을 때 실패 처리하기 위해 사용</strong></p>
</blockquote>
<ul>
<li><code>JUnit5</code>에서는 <code>JUnit4</code>에서 사용하지 못한 <code>Java 8의 람다 표현식</code> 사용이 가능함에 따라, 테스트 코드를 보다 <strong>Functional</strong>하게 작성할 수 있다.</li>
</ul>
<p>Using <code>org.junit.jupiter.api.Assertions</code></p>
<h3 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
Calculator -> String expression을 받아 expression result 출력
이 때, 사칙연산의 우선순위를 적용하지 않고, 입력받는 operand를 순차적으로 연산함
*/</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">assertions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"2 + 3 * 4 / 2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertTrue</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token string">"Assertion messages can be lazily evaluated -- to avoid constructing complex messages unnecessarily."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="@source/images/JUnit/assertions.png" alt="Assertions Test"></p>
<ul>
<li>assertion에 대한 메시지를 붙일 수 있다. 실패하면 지정한 메시지를 출력할 수 있다.</li>
</ul>
<h3 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> Group</h3>
<ul>
<li>JUnit5에서 추가된 것으로, <strong>동시에 Assertion 구문을 실행시킬 수 있는 그룹</strong>을 만들 수 있다.</li>
<li>assertion 메서드와 람다식의 조합으로 <strong>병행 실행</strong>을 구현할 수 있다.</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">groupAssertions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertAll</span><span class="token punctuation">(</span><span class="token string">"CalcTest"</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"2 + 3 * 4 / 2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"2 + 3 * 4 - 20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="@source/images/JUnit/group-assertions.png" alt="Group Assertions Test"></p>
<ul>
<li>두 구문이 모두 실패하였을 경우 위의 이미지와 같이 두 구문에 대한 실패 메시지를 출력한다.</li>
</ul>
<p><img src="@source/images/JUnit/group-assertions-2.png" alt="Group Assertions Test"></p>
<ul>
<li>두 구문 중 하나가 실패하였을 경우 위의 이미지와 같이 한 구문에 대한 실패 메시지를 출력한다.</li>
</ul>
<h3 id="exceptions" tabindex="-1"><a class="header-anchor" href="#exceptions" aria-hidden="true">#</a> Exceptions</h3>
<ul>
<li><code>JUnit4</code>에서는 Exception 테스트를 위해 <code>@Test(expected = &lt;ExceptionClass&gt;)</code> 와 같이 <code>Annotation</code>을 통해 확인할 수 있었으나, 이러한 테스트는 Exception 발생 지점을 정확하게 파악하기 힘든 단점이 있다.</li>
<li><code>JUnit5</code>에서는 <code>assertThrows</code>, <code>assertThatThrownBy</code> 등의 메서드를 활용해서 exception 테스트가 가능하다. <strong>exception이 발생할 수 있는 부분을 람다 표현식으로 감싸서 exception이 발생하는 지점을 특정하여 테스트가 가능하다.</strong></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
Calculator의 constructor에 argument로 expression을 입력받는다.
이 때, 정상적인 expression이 아닐 경우 IllegalArgumentException을 throw하도록 설계하였다.
*/</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">exceptionAssertions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 아래의 경우 IllegalArgumentException이 발생하며 NumberFormatException은 발생하지 않는다.</span>
    <span class="token class-name">Exception</span> exception <span class="token operator">=</span> <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"+ + / 3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="@source/images/JUnit/exception-assertions.png" alt="Exception Assertions"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
0으로 나누는 경우에도 IllegalArgumentException을 throw한다.
*/</span>
<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">"0으로 나누었을 때 에러 검증"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">errorWhenDivideByZero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThatThrownBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"2 / 0 + 5 * 3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">isInstanceOf</span><span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h3>
<ul>
<li><code>JUnit4</code>에서는 <code>@Test(timeout=&lt;seconds&gt;</code>를 통해 타임아웃을 지정한다. 위의 exception 케이스와 마찬가지로 이런 경우 Exception 발생 지점을 정확하게 파악하기 힘든 단점이 있다.</li>
<li><code>JUnit5</code>에서 <code>assertTimeout</code> 메서드를 활용해 문제를 해결할 수 있다. 해당 메서드는 반환값을 가져 추후 활용이 가능하다.</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
ofMinutes(Duration timeout)에서 정의한 시간 내에 실행이 완료되지 않으면 테스트를 실패시킨다.*/</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">timeoutNotExceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The following assertion succeeds.</span>
    <span class="token function">assertTimeout</span><span class="token punctuation">(</span><span class="token function">ofMinutes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token comment">// Perform task that takes less than 2 minutes.</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">timeoutNotExceededWithResultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The following assertion succeeds, and returns the supplied object.</span>
    <span class="token class-name">String</span> actualResult <span class="token operator">=</span> <span class="token function">assertTimeout</span><span class="token punctuation">(</span><span class="token function">ofMinutes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Result Message"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"Result Message"</span><span class="token punctuation">,</span> actualResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr>
<h2 id="assumptions" tabindex="-1"><a class="header-anchor" href="#assumptions" aria-hidden="true">#</a> Assumptions</h2>
<blockquote>
<p>가정문, <strong>특정 조건에서만 테스트를 실행하고자 할 때, 또한 반대로 특정 상황에서만 실행하지 않고자 할 때 사용</strong></p>
</blockquote>
<p><code>org.junit.jupiter.api.Assumptions</code></p>
<h3 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> environment <span class="token operator">=</span> <span class="token string">"local"</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testOnLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assumeTrue</span><span class="token punctuation">(</span><span class="token string">"local"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token string">"Aborting test: not on developer workstation"</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"2 + 3 * 4 / 2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>위의 코드는 실행 환경이 <code>local</code>인 경우에만 <code>assumeTrue</code>에서 <code>true</code>로 인지하여 아래 <code>assertThat</code> 구문을 실행하며, <code>assumeTrue</code>가 통과되지 않으면 <strong>해당 테스트 메서드는 실패가 아닌 <code>ignored</code> 처리된다. (<code>@Disabled</code>)</strong></li>
</ul>
<h3 id="applications" tabindex="-1"><a class="header-anchor" href="#applications" aria-hidden="true">#</a> Applications</h3>
<ul>
<li><code>assumingThat</code> 구문을 사용하면 보다 복잡한 assumptions 구현이 가능하다.</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> environment <span class="token operator">=</span> <span class="token string">"development"</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testInAllEnvironments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assumingThat</span><span class="token punctuation">(</span><span class="token string">"development"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In development mode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"4 / 2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Etc Environment"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token string">"6 * 5"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li><code>assumingThat</code>의 <strong>첫번째 인자가 true인 경우, 다음 함수형 파라미터가 실행</strong>된다.</li>
</ul>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<ul>
<li><a href="https://stackoverflow.com/questions/44628483/assume-vs-assert-in-junit-tests" target="_blank" rel="noopener noreferrer">StackOverflow<ExternalLinkIcon/></a></li>
</ul>
</template>
