<template><h1 id="graph" tabindex="-1"><a class="header-anchor" href="#graph" aria-hidden="true">#</a> Graph</h1>
<p>Posted at 21-07-16</p>
<ul>
<li>객체의 일부 쌍들이 연관되어 있는 객체 집합 구조
<ul>
<li>정점(<code>Vertex</code>)과 간선(<code>Edge</code>)의 집합</li>
<li>구현에는 <code>Adjacency Matrix</code> / <code>Adjacency List</code> 사용</li>
</ul>
</li>
<li>그래프의 각 정점을 방문하는 그래프 순회 (Traversal) 알고리즘에 크게 <code>DFS</code> / <code>BFS</code> 로 나뉨</li>
</ul>
<h2 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs" aria-hidden="true">#</a> DFS</h2>
<blockquote>
<p>Depth-First Search, 깊이 우선 탐색</p>
</blockquote>
<ul>
<li>루트 노드 혹은 임의의 노드에서 시작해 <strong>다음 branch로 넘어가기 전까지 현재 branch를 완벽하게 탐색</strong>하는 방법 (Deep)</li>
<li><code>스택</code> 혹은 <code>Recursive Call</code>로 구현</li>
<li>전위 / 중위 / 후위 순회 등 트리 순회는 DFS의 한 종류</li>
<li>노드 방문 여부 확인 필요</li>
<li>검색의 <code>BFS</code> 대비 낮은 퍼포먼스</li>
</ul>
<p><img src="@source/images/DFS/DFS.001.jpeg" alt="DFS"></p>
<blockquote>
<h3 id="backtracking" tabindex="-1"><a class="header-anchor" href="#backtracking" aria-hidden="true">#</a> Backtracking</h3>
<ul>
<li>완전 탐색으로 여러 개의 솔루션을 가진 문제에서, 모든 솔루션을 탐색하는 전략
<ul>
<li>어떤 노드의 <code>유망함(Promising)</code>을 점검해 그렇지 않으면 배제(가지치기 - <code>Pruning</code>)시킨다. 해당 노드의 부모 노드로 되돌아가 다른 자식 노드를 검색한다.</li>
<li>가능성이 없어보이는 후보를 과감히 포기해 모든 경우를 탐색하는 브루트포스와는 차이</li>
<li>제약 충족 문제 (CSP)를 풀이하는데 필수적인 알고리즘</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity" aria-hidden="true">#</a> Time Complexity</h3>
<ul>
<li><code>Adjacency Matrix</code> 사용하는 경우 <code>O(V^2)</code></li>
<li><code>Adjacency List</code> 사용하는 경우 노드 수 <code>V</code> + 간선 수 <code>E</code> 만큼의 시간복잡도 소요 <code>O(|V| + |E|)</code></li>
</ul>
<h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">recursive_dfs</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> discovered<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    Recursive Call Version (Visiting by lexicographical order)
    """</span>
    discovered<span class="token punctuation">.</span>append<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token keyword">for</span> w <span class="token keyword">in</span> graph<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> w <span class="token keyword">not</span> <span class="token keyword">in</span> discovered<span class="token punctuation">:</span>
            discovered <span class="token operator">=</span> recursive_dfs<span class="token punctuation">(</span>w<span class="token punctuation">,</span> discovered<span class="token punctuation">)</span>
    <span class="token keyword">return</span> discovered
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">iterative_dfs</span><span class="token punctuation">(</span>startV<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    Iteration with Stack Version (Visiting by reversed order)
    """</span>
    discovered <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    stack <span class="token operator">=</span> <span class="token punctuation">[</span>startV<span class="token punctuation">]</span>
    <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
        v <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> v <span class="token keyword">not</span> <span class="token keyword">in</span> discovered<span class="token punctuation">:</span>
            discovered<span class="token punctuation">.</span>append<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
            <span class="token keyword">for</span> w <span class="token keyword">in</span> graph<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
    <span class="token keyword">return</span> discovered
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr>
<h2 id="bfs" tabindex="-1"><a class="header-anchor" href="#bfs" aria-hidden="true">#</a> BFS</h2>
<blockquote>
<p>Breadth-First Search, 너비 우선 탐색</p>
</blockquote>
<ul>
<li>루트 노드 혹은 임의의 노드에서 시작해 <strong>인접한 노드를 우선적으로 탐색</strong>하는 방법 (Breadth)</li>
<li><code>큐</code>를 활용해 구현</li>
<li><code>최단거리</code>를 찾는 <code>Dijkstra</code> 알고리즘 등에 사용</li>
</ul>
<p><img src="@source/images/BFS/BFS.001.jpeg" alt="BFS"></p>
<h3 id="time-complexity-1" tabindex="-1"><a class="header-anchor" href="#time-complexity-1" aria-hidden="true">#</a> Time Complexity</h3>
<ul>
<li><code>Adjacency Matrix</code> 사용하는 경우 <code>O(V^2)</code></li>
<li><code>Adjacency List</code> 사용하는 경우 노드 수 <code>V</code> + 간선 수 <code>E</code> 만큼의 시간복잡도 소요 <code>O(|V| + |E|)</code></li>
</ul>
<h3 id="implementation-1" tabindex="-1"><a class="header-anchor" href="#implementation-1" aria-hidden="true">#</a> Implementation</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">iterative_dfs</span><span class="token punctuation">(</span>startV<span class="token punctuation">)</span><span class="token punctuation">:</span>
    discovered <span class="token operator">=</span> <span class="token punctuation">[</span>startV<span class="token punctuation">]</span>
    queue <span class="token operator">=</span> <span class="token punctuation">[</span>startV<span class="token punctuation">]</span>
    <span class="token keyword">while</span> queue<span class="token punctuation">:</span>
        v <span class="token operator">=</span> queue<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> w <span class="token keyword">in</span> graph<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> w <span class="token keyword">not</span> <span class="token keyword">in</span> discovered<span class="token punctuation">:</span>
                discovered<span class="token punctuation">.</span>append<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
                queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
    <span class="token keyword">return</span> discovered
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr>
<h2 id="그래프의-활용" tabindex="-1"><a class="header-anchor" href="#그래프의-활용" aria-hidden="true">#</a> 그래프의 활용</h2>
<ul>
<li>
<ol>
<li>그래프의 모든 정점을 방문이 주요한 경우</li>
</ol>
</li>
<li>
<ol start="2">
<li>경로의 특징을 파악해야 하는 경우</li>
</ol>
</li>
<li>
<ol start="3">
<li>최단거리를 구해야 하는 경우</li>
</ol>
</li>
</ul>
<hr>
<h3 id="topological-sort" tabindex="-1"><a class="header-anchor" href="#topological-sort" aria-hidden="true">#</a> Topological Sort</h3>
<blockquote>
<p>위상 정렬</p>
</blockquote>
<ul>
<li>DFS를 사용해 풀 수 있는 방식으로, <strong>의존성 있는 작업이 주어질 때, 어떤 순서로 수행해야 하는지 계산하는 방법</strong></li>
</ul>
<p><img src="@source/images/DFS/DFS.002.jpeg" alt="Topological Sort"></p>
</template>
