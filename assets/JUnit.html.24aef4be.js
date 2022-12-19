import{_ as c,r as o,o as p,c as l,b as n,d as s,a as t,e}from"./app.afe75d95.js";const i={},u=t(`<h1 id="junit" tabindex="-1"><a class="header-anchor" href="#junit" aria-hidden="true">#</a> JUnit</h1><hr><blockquote><p>\uC790\uBC14\uC758 \uB2E8\uC704 \uD14C\uC2A4\uD2B8 \uC791\uC131\uC744 \uC704\uD55C \uD504\uB808\uC784\uC6CC\uD06C</p></blockquote><p><em>Gradle \uAE30\uC900 \uC124\uBA85</em></p><h2 id="check-if-gradle-set-up" tabindex="-1"><a class="header-anchor" href="#check-if-gradle-set-up" aria-hidden="true">#</a> Check if Gradle set up</h2><div class="language-cli ext-cli line-numbers-mode"><pre class="language-cli"><code>gradle -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="declaration" tabindex="-1"><a class="header-anchor" href="#declaration" aria-hidden="true">#</a> Declaration</h2><p>In <code>build.gradle</code></p><div class="language-gradle ext-gradle line-numbers-mode"><pre class="language-gradle"><code>test {
    useJUnitPlatform()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assertj" tabindex="-1"><a class="header-anchor" href="#assertj" aria-hidden="true">#</a> Assertj</h2><p>Java \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C \uD14C\uC2A4\uD2B8\uC5D0 \uC0AC\uC6A9\uB418\uB294 assertions \uC791\uC131\uC5D0 \uB3C4\uC6C0\uC744 \uC900\uB2E4. \uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uAC00\uB3C5\uC131\uC744 \uB192\uC774\uACE0 \uC0AC\uC6A9\uD558\uAE30 \uC27D\uAC8C \uB514\uC790\uC778 \uB418\uC5B4 \uC788\uB2E4.</p>`,11),r={href:"https://assertj.github.io/doc/",target:"_blank",rel:"noopener noreferrer"},d=e("Assertj"),k=t(`<p>In <code>build.gradle</code>,</p><div class="language-gradle ext-gradle line-numbers-mode"><pre class="language-gradle"><code>testImplementation(&quot;org.assertj:assertj-core:3.20.2&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hamcrest" tabindex="-1"><a class="header-anchor" href="#hamcrest" aria-hidden="true">#</a> hamcrest</h2><p><code>JUnit</code>\uC5D0 \uC0AC\uC6A9\uB418\uB294 matcher \uB77C\uC774\uBE0C\uB7EC\uB9AC.</p><blockquote><ul><li>Matcher \uB77C\uC774\uBE0C\uB7EC\uB9AC : \uD544\uD130 / \uAC80\uC0C9 \uB4F1\uC744 \uC704\uD55C \uAC12 \uBE44\uAD50 \uC2DC\uC5D0 \uC880 \uB354 \uD3B8\uB9AC\uD558\uAC8C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC</li></ul></blockquote><h3 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> packages</h3><table><thead><tr><th>\uD328\uD0A4\uC9C0</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>org.hamcrest.core</td><td>\uC624\uBE0C\uC81D\uD2B8, \uAC12\uC5D0 \uB300\uD55C \uAE30\uBCF8\uC801\uC778 matcher\uB4E4</td></tr><tr><td>org.hamcrest.beans</td><td>java bean\uACFC \uADF8 \uAC12 \uBE44\uAD50\uC5D0 \uC0AC\uC6A9\uB418\uB294 matcher</td></tr><tr><td>org.hamcrest.collection</td><td>\uBC30\uC5F4\uACFC \uCEEC\uB809\uC158 matcher</td></tr><tr><td>org.hamcrest.number</td><td>\uC218 \uBE44\uAD50 \uC704\uD55C matcher</td></tr><tr><td>org.hamcrest.object</td><td>\uC624\uBE0C\uC81D\uD2B8\uC640 \uD074\uB798\uC2A4 \uBE44\uAD50\uD558\uB294 matcher</td></tr><tr><td>org.hamcrest.test</td><td>\uBB38\uC790\uC5F4 \uBE44\uAD50</td></tr><tr><td>org.hamcrest.xml</td><td>XML \uBB38\uC11C \uBE44\uAD50</td></tr></tbody></table><h2 id="creating-tests" tabindex="-1"><a class="header-anchor" href="#creating-tests" aria-hidden="true">#</a> Creating Tests</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token static">assertEquals</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCertainFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">625</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assertion" tabindex="-1"><a class="header-anchor" href="#assertion" aria-hidden="true">#</a> Assertion</h2><ul><li><p><code>assertTrue(x)</code> : \uAC12\uC774 True\uC778\uC9C0 \uD655\uC778</p></li><li><p><code>assertFalse(y)</code> : \uAC12\uC774 False\uC778\uC9C0 \uD655\uC778</p></li><li><p><code>assertEquals(expect, actual)</code> : \uB450 \uAC1D\uCCB4\uC758 \uAC12\uC774 \uC77C\uCE58\uD558\uBA74 \uD1B5\uACFC</p><ul><li>\uC2E4\uC218\uC758 \uAC00\uB2A5\uC131\uC774 \uB192\uAE30 \uB54C\uBB38\uC5D0 <code>assertThat</code> \uACE0\uB824</li></ul></li><li><p><code>assertArrayEquals(x, y)</code> : \uB450 \uBC30\uC5F4\uC774 \uC77C\uCE58\uD568\uC744 \uD655\uC778</p></li><li><p><code>assertNull(o)</code> : \uAC1D\uCCB4\uAC00 null\uC778\uC9C0 \uD655\uC778</p></li><li><p><code>assertNotNull(o)</code> : \uAC1D\uCCB4\uAC00 null\uC774 \uC544\uB2CC\uC9C0 \uD655\uC778</p></li><li><p><code>assertSame(ox, oy)</code> : ox, oy\uAC00 \uAC19\uC740 \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uBA74 \uD1B5\uACFC</p></li><li><p><code>assertNotSame(ox, oy)</code> : ox, oy\uAC00 \uAC19\uC740 \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uC9C0 \uC54A\uC73C\uBA74 \uD1B5\uACFC</p></li><li><p><code>assertfail()</code> : \uBC14\uB85C \uC2E4\uD328 \uCC98\uB9AC</p></li><li><p><code>assertThat(T actual, Matcher&lt;? super T&gt; matcher)</code> : actual\uC774 matcher\uC758 expected\uC640 \uC77C\uCE58\uD558\uB294\uC9C0 \uD655\uC778</p><blockquote><p><code>JUnit 4.4 ~ </code></p></blockquote></li></ul><h3 id="matchers" tabindex="-1"><a class="header-anchor" href="#matchers" aria-hidden="true">#</a> Matchers</h3><ul><li><p><code>allOf</code></p><ul><li>\uB0B4\uBD80\uC5D0 \uC120\uC5B8\uB41C \uBAA8\uB4E0 matcher\uAC00 \uC815\uC0C1\uC77C \uACBD\uC6B0 \uD1B5\uACFC</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">&quot;kworkbee&quot;</span><span class="token punctuation">,</span> <span class="token function">allOf</span><span class="token punctuation">(</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;G1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Tommy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>anyOf</code></p><ul><li>\uB0B4\uBD80\uC5D0 \uC120\uC5B8\uB41C matcher \uC911 \uD558\uB098 \uC774\uC0C1 \uC815\uC0C1\uC77C \uACBD\uC6B0 \uD1B5\uACFC</li></ul></li><li><p><code>both</code> <code>and</code></p><ul><li>matcher \uAC01\uAC01\uC774 \uC815\uC0C1\uC77C \uACBD\uC6B0 \uD1B5\uACFC</li><li><code>both(matcher).and(matcher2)</code></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">&quot;Tommy&quot;</span><span class="token punctuation">,</span> <span class="token function">both</span><span class="token punctuation">(</span><span class="token function">containsString</span><span class="token punctuation">(</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token function">containsString</span><span class="token punctuation">(</span><span class="token string">&quot;m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>either</code> <code>or</code></p><ul><li>matcher \uC911 \uD558\uB098\uAC00 \uC815\uC0C1\uC77C \uACBD\uC6B0 \uD1B5\uACFC</li><li><code>either(matcher).or(matcher2)</code></li></ul></li><li><p><code>describedAs</code></p><ul><li>matcher \uB0B4\uBD80 \uBA54\uC2DC\uC9C0 \uBCC0\uACBD \uAC00\uB2A5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;19970011&quot;</span><span class="token punctuation">,</span> <span class="token function">describedAs</span><span class="token punctuation">(</span><span class="token string">&quot;Number you said is : %0&quot;</span><span class="token punctuation">,</span> <span class="token function">equalTo</span><span class="token punctuation">(</span>varDecimal<span class="token punctuation">)</span><span class="token punctuation">,</span> varDecimal<span class="token punctuation">.</span><span class="token function">toPlainString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>everyItem</code></p><ul><li>\uBC30\uC5F4\uC744 \uC21C\uD68C\uD558\uBA70 matcher \uC2E4\uD589</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;ABBB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BBAB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">everyItem</span><span class="token punctuation">(</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>is</code></p><ul><li><ol><li>\uBE44\uAD50\uAC12\uC758 \uC77C\uCE58 \uC5EC\uBD80</li></ol></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">&quot;Dummy Text&quot;</span><span class="token punctuation">,</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;Dummy Text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><ol start="2"><li>\uB2E4\uB978 matcher\uB97C \uAFB8\uBBF8\uB294 \uC6A9\uB3C4. matcher\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uC74C. \uD45C\uD604\uB825\uC744 \uC704\uD568</li></ol></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">&quot;Dummy Text&quot;</span><span class="token punctuation">,</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token string">&quot;Dummy Text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>isA</code></p><ul><li>\uBE44\uAD50\uB418\uB294 \uAC12\uC774 \uD2B9\uC815 \uD074\uB798\uC2A4\uC77C \uACBD\uC6B0 \uD1B5\uACFC</li><li><code>is(instanceOf(ClassName.class))</code>\uC640 \uB3D9\uC77C</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span>electricCar<span class="token punctuation">,</span> <span class="token function">isA</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>anything</code></p><ul><li>\uD56D\uC0C1 true \uBC18\uD658</li></ul></li><li><p><code>hasItem</code></p><ul><li>\uBC30\uC5F4\uC5D0\uC11C matcher\uAC00 \uD1B5\uACFC\uD558\uB294 \uAC12\uC774 \uD558\uB098 \uC774\uC0C1\uC778\uC9C0 \uD655\uC778</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">hasItem</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>hasItems</code></p><ul><li>\uBC30\uC5F4\uC5D0\uC11C matcher\uAC00 \uD1B5\uACFC\uD558\uB294 \uAC12 \uBAA8\uB450 \uD558\uB098 \uC774\uC0C1 \uC788\uB294\uC9C0 \uD655\uC778</li></ul></li><li><p><code>equalTo</code></p><ul><li>\uB450 \uAC12\uC758 \uC77C\uCE58 \uC5EC\uBD80 \uD655\uC778. <code>is</code>\uC640 \uB3D9\uC77C</li></ul></li><li><p><code>any</code></p><ul><li>\uBE44\uAD50 \uAC12\uC774 matcher \uD0C0\uC785\uACFC \uB3D9\uC77C\uD55C\uC9C0 \uD655\uC778</li><li><code>instanceOf</code>\uC640 \uB2EC\uB9AC matcher \uAC12\uC740 \uBE44\uAD50 \uAC12\uC758 \uD0C0\uC785\uC758 \uC790\uC2DD\uACFC\uB9CC \uBE44\uAD50 \uAC00\uB2A5</li></ul></li><li><p><code>instanceOf</code></p><ul><li>\uBE44\uAD50 \uAC12\uC774 matcher \uD0C0\uC785\uACFC \uB3D9\uC77C\uD55C\uC9C0 \uD655\uC778</li><li><code>any</code>\uC640 \uB2EC\uB9AC matcher \uAC12\uC740 \uBE44\uAD50 \uAC12\uACFC \uC5F0\uAD00 \uC5C6\uC5B4\uB3C4 \uC0AC\uC6A9 \uAC00\uB2A5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ElectricCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">instanceOf</span><span class="token punctuation">(</span><span class="token class-name">Bicycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>not</code></p><ul><li><code>is</code>\uC640 \uB3D9\uC77C\uD558\uAC8C \uB450 \uAC00\uC9C0 \uACBD\uC6B0\uB85C \uC0AC\uC6A9</li><li>\uAC12\uC774 \uAC19\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC815\uC0C1</li></ul></li><li><p><code>nullValue</code></p><ul><li>\uBE44\uAD50 \uAC12\uC774 null\uC778 \uACBD\uC6B0 \uC815\uC0C1</li></ul></li><li><p><code>notNullValue</code></p><ul><li>\uBE44\uAD50 \uAC12\uC774 null\uC774 \uC544\uB2D0 \uACBD\uC6B0 \uC815\uC0C1</li></ul></li><li><p><code>sameInstance</code> / <code>theInstance</code></p><ul><li>\uBE44\uAD50 matcher \uAC12\uACFC \uAC19\uC740 \uC778\uC2A4\uD134\uC2A4\uC77C \uACBD\uC6B0 \uC815\uC0C1</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token string">&quot;Test&quot;</span><span class="token punctuation">,</span> <span class="token function">not</span><span class="token punctuation">(</span><span class="token function">sameInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Not same instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>containsString</code></p><ul><li>\uD2B9\uC815 \uBB38\uC790\uC5F4 \uD655\uC778</li></ul></li><li><p><code>startsWith</code></p><ul><li>\uD2B9\uC815 \uBB38\uC790\uC5F4\uB85C \uC2DC\uC791\uD558\uB294\uC9C0 \uD655\uC778</li></ul></li><li><p><code>endsWith</code></p><ul><li>\uD2B9\uC815 \uBB38\uC790\uC5F4\uB85C \uC885\uB8CC\uD558\uB294\uC9C0 \uD655\uC778</li></ul></li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,14),h={href:"https://junit.org/junit5/docs/current/user-guide",target:"_blank",rel:"noopener noreferrer"},m=e("JUnit5 Documentation");function v(g,b){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[n("a",r,[d,s(a)])]),k,n("ul",null,[n("li",null,[n("a",h,[m,s(a)])])])])}var q=c(i,[["render",v],["__file","JUnit.html.vue"]]);export{q as default};
