<template><h1 id="design-pattern-adapter" tabindex="-1"><a class="header-anchor" href="#design-pattern-adapter" aria-hidden="true">#</a> [Design Pattern] Adapter</h1>
<p>Posted at 21-07-22</p>
<hr>
<ul>
<li>
<p>인터페이스 호환성 문제로 인해 같이 쓸 수 없는 클래스를 연결하는 방법을 담는 패턴.</p>
<ul>
<li>한 클래스의 인터페이스를 클라이언트에서 사용하고자 하는 <strong>다른 인터페이스로 변환</strong></li>
</ul>
</li>
<li>
<p>기존 시스템에 3rd-party library 추가, 레거시 인터페이스의 교체 등이 해당</p>
</li>
</ul>
<p><img src="@source/images/DP/DP-Adapter.001.jpeg" alt="Adapter Structure">
<img src="@source/images/DP/DP-Adapter.002.jpeg" alt="Adapter Sequence Diagram"></p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Volt110</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> connect <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"110V Connected!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Volt220</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> connect <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"220 Connected!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">VoltAdapter220To110</span> <span class="token keyword">implements</span> <span class="token class-name">Volt110</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Volt220</span> appliance<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">VoltAdapter220To110</span><span class="token punctuation">(</span><span class="token class-name">Volt220</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>appliance <span class="token operator">=</span> m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> connect <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>'<span class="token class-name">Successfully</span> <span class="token class-name">Converted</span><span class="token operator">!</span>'<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">VoltAdapter220To110</span> adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Volt220</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        adapter<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
