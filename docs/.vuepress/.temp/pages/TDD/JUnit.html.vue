<template><h1 id="junit" tabindex="-1"><a class="header-anchor" href="#junit" aria-hidden="true">#</a> JUnit</h1>
<p>Posted at 2021-06-30</p>
<blockquote>
<p>자바의 단위 테스트 작성을 위한 프레임워크</p>
</blockquote>
<p><em>Gradle 기준 설명</em></p>
<h2 id="check-if-gradle-set-up" tabindex="-1"><a class="header-anchor" href="#check-if-gradle-set-up" aria-hidden="true">#</a> Check if Gradle set up</h2>
<div class="language-cli ext-cli line-numbers-mode"><pre v-pre class="language-cli"><code>gradle -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="declaration" tabindex="-1"><a class="header-anchor" href="#declaration" aria-hidden="true">#</a> Declaration</h2>
<p>In <code>build.gradle</code></p>
<div class="language-gradle ext-gradle line-numbers-mode"><pre v-pre class="language-gradle"><code>test {
    useJUnitPlatform()
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3rd-party-assertion-libraries" tabindex="-1"><a class="header-anchor" href="#_3rd-party-assertion-libraries" aria-hidden="true">#</a> 3rd Party Assertion Libraries</h2>
<h3 id="assertj" tabindex="-1"><a class="header-anchor" href="#assertj" aria-hidden="true">#</a> Assertj</h3>
<p>Java 라이브러리로 테스트에 사용되는 assertions 작성에 도움을 준다. 테스트 코드 가독성을 높이고 사용하기 쉽게 디자인 되어 있다.</p>
<p><a href="https://assertj.github.io/doc/" target="_blank" rel="noopener noreferrer">Assertj<ExternalLinkIcon/></a></p>
<p>In <code>build.gradle</code>,</p>
<div class="language-gradle ext-gradle line-numbers-mode"><pre v-pre class="language-gradle"><code>testImplementation(&quot;org.assertj:assertj-core:3.20.2&quot;)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="hamcrest" tabindex="-1"><a class="header-anchor" href="#hamcrest" aria-hidden="true">#</a> hamcrest</h3>
<p><code>JUnit</code>에 사용되는 matcher 라이브러리.</p>
<blockquote>
<ul>
<li>Matcher 라이브러리 : 필터 / 검색 등을 위한 값 비교 시에 좀 더 편리하게 사용하도록 도와주는 라이브러리</li>
</ul>
</blockquote>
<h4 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> packages</h4>
<table>
<thead>
<tr>
<th>패키지</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>org.hamcrest.core</td>
<td>오브젝트, 값에 대한 기본적인 matcher들</td>
</tr>
<tr>
<td>org.hamcrest.beans</td>
<td>java bean과 그 값 비교에 사용되는 matcher</td>
</tr>
<tr>
<td>org.hamcrest.collection</td>
<td>배열과 컬렉션 matcher</td>
</tr>
<tr>
<td>org.hamcrest.number</td>
<td>수 비교 위한 matcher</td>
</tr>
<tr>
<td>org.hamcrest.object</td>
<td>오브젝트와 클래스 비교하는 matcher</td>
</tr>
<tr>
<td>org.hamcrest.test</td>
<td>문자열 비교</td>
</tr>
<tr>
<td>org.hamcrest.xml</td>
<td>XML 문서 비교</td>
</tr>
</tbody>
</table>
<h2 id="creating-tests" tabindex="-1"><a class="header-anchor" href="#creating-tests" aria-hidden="true">#</a> Creating Tests</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span>assertEquals<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCertainFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">625</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="assertion" tabindex="-1"><a class="header-anchor" href="#assertion" aria-hidden="true">#</a> Assertion</h2>
<ul>
<li>
<p><code>assertTrue(x)</code> : 값이 True인지 확인</p>
</li>
<li>
<p><code>assertFalse(y)</code> : 값이 False인지 확인</p>
</li>
<li>
<p><code>assertEquals(expect, actual)</code> : 두 객체의 값이 일치하면 통과</p>
<ul>
<li>실수의 가능성이 높기 때문에 <code>assertThat</code> 고려</li>
</ul>
</li>
<li>
<p><code>assertArrayEquals(x, y)</code> : 두 배열이 일치함을 확인</p>
</li>
<li>
<p><code>assertNull(o)</code> : 객체가 null인지 확인</p>
</li>
<li>
<p><code>assertNotNull(o)</code> : 객체가 null이 아닌지 확인</p>
</li>
<li>
<p><code>assertSame(ox, oy)</code> : ox, oy가 같은 객체를 참조하면 통과</p>
</li>
<li>
<p><code>assertNotSame(ox, oy)</code> : ox, oy가 같은 객체를 참조하지 않으면 통과</p>
</li>
<li>
<p><code>assertfail()</code> : 바로 실패 처리</p>
</li>
<li>
<p><code>assertThat(T actual, Matcher&lt;? super T&gt; matcher)</code> : actual이 matcher의 expected와 일치하는지 확인</p>
<blockquote>
<p><code>JUnit 4.4 ~ </code></p>
</blockquote>
</li>
</ul>
<h3 id="matchers" tabindex="-1"><a class="header-anchor" href="#matchers" aria-hidden="true">#</a> Matchers</h3>
<ul>
<li>
<p><code>allOf</code></p>
<ul>
<li>내부에 선언된 모든 matcher가 정상일 경우 통과</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">"kworkbee"</span><span class="token punctuation">,</span> <span class="token function">allOf</span><span class="token punctuation">(</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"G1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"Tommy"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>anyOf</code></p>
<ul>
<li>내부에 선언된 matcher 중 하나 이상 정상일 경우 통과</li>
</ul>
</li>
<li>
<p><code>both</code> <code>and</code></p>
<ul>
<li>matcher 각각이 정상일 경우 통과</li>
<li><code>both(matcher).and(matcher2)</code></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">"Tommy"</span><span class="token punctuation">,</span> <span class="token function">both</span><span class="token punctuation">(</span><span class="token function">containsString</span><span class="token punctuation">(</span><span class="token string">"o"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token function">containsString</span><span class="token punctuation">(</span><span class="token string">"m"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>either</code> <code>or</code></p>
<ul>
<li>matcher 중 하나가 정상일 경우 통과</li>
<li><code>either(matcher).or(matcher2)</code></li>
</ul>
</li>
<li>
<p><code>describedAs</code></p>
<ul>
<li>matcher 내부 메시지 변경 가능</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"19970011"</span><span class="token punctuation">,</span> <span class="token function">describedAs</span><span class="token punctuation">(</span><span class="token string">"Number you said is : %0"</span><span class="token punctuation">,</span> <span class="token function">equalTo</span><span class="token punctuation">(</span>varDecimal<span class="token punctuation">)</span><span class="token punctuation">,</span> varDecimal<span class="token punctuation">.</span><span class="token function">toPlainString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>everyItem</code></p>
<ul>
<li>배열을 순회하며 matcher 실행</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"ABBB"</span><span class="token punctuation">,</span> <span class="token string">"BBAB"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">everyItem</span><span class="token punctuation">(</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>is</code></p>
<ul>
<li>
<ol>
<li>비교값의 일치 여부</li>
</ol>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">"Dummy Text"</span><span class="token punctuation">,</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token string">"Dummy Text"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<ol start="2">
<li>다른 matcher를 꾸미는 용도. matcher에 영향을 미치지 않음. 표현력을 위함</li>
</ol>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">"Dummy Text"</span><span class="token punctuation">,</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token string">"Dummy Text"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>isA</code></p>
<ul>
<li>비교되는 값이 특정 클래스일 경우 통과</li>
<li><code>is(instanceOf(ClassName.class))</code>와 동일</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span>electricCar<span class="token punctuation">,</span> <span class="token function">isA</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>anything</code></p>
<ul>
<li>항상 true 반환</li>
</ul>
</li>
<li>
<p><code>hasItem</code></p>
<ul>
<li>배열에서 matcher가 통과하는 값이 하나 이상인지 확인</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"B"</span><span class="token punctuation">,</span> <span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">hasItem</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>hasItems</code></p>
<ul>
<li>배열에서 matcher가 통과하는 값 모두 하나 이상 있는지 확인</li>
</ul>
</li>
<li>
<p><code>equalTo</code></p>
<ul>
<li>두 값의 일치 여부 확인. <code>is</code>와 동일</li>
</ul>
</li>
<li>
<p><code>any</code></p>
<ul>
<li>비교 값이 matcher 타입과 동일한지 확인</li>
<li><code>instanceOf</code>와 달리 matcher 값은 비교 값의 타입의 자식과만 비교 가능</li>
</ul>
</li>
<li>
<p><code>instanceOf</code></p>
<ul>
<li>비교 값이 matcher 타입과 동일한지 확인</li>
<li><code>any</code>와 달리 matcher 값은 비교 값과 연관 없어도 사용 가능</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ElectricCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">instanceOf</span><span class="token punctuation">(</span><span class="token class-name">Bicycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>not</code></p>
<ul>
<li><code>is</code>와 동일하게 두 가지 경우로 사용</li>
<li>값이 같지 않을 경우 정상</li>
</ul>
</li>
<li>
<p><code>nullValue</code></p>
<ul>
<li>비교 값이 null인 경우 정상</li>
</ul>
</li>
<li>
<p><code>notNullValue</code></p>
<ul>
<li>비교 값이 null이 아닐 경우 정상</li>
</ul>
</li>
<li>
<p><code>sameInstance</code> / <code>theInstance</code></p>
<ul>
<li>비교 matcher 값과 같은 인스턴스일 경우 정상</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token function">not</span><span class="token punctuation">(</span><span class="token function">sameInstance</span><span class="token punctuation">(</span><span class="token string">"Not same instance"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>containsString</code></p>
<ul>
<li>특정 문자열 확인</li>
</ul>
</li>
<li>
<p><code>startsWith</code></p>
<ul>
<li>특정 문자열로 시작하는지 확인</li>
</ul>
</li>
<li>
<p><code>endsWith</code></p>
<ul>
<li>특정 문자열로 종료하는지 확인</li>
</ul>
</li>
</ul>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<ul>
<li><a href="https://junit.org/junit5/docs/current/user-guide" target="_blank" rel="noopener noreferrer">JUnit5 Documentation<ExternalLinkIcon/></a></li>
</ul>
</template>
