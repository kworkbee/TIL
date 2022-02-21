<template><h1 id="vault" tabindex="-1"><a class="header-anchor" href="#vault" aria-hidden="true">#</a> Vault</h1>
<blockquote>
<p>민감한 Secret 정보를 안전하게 저장하기 위한 Hashicorp 사의 오픈소스 솔루션.</p>
</blockquote>
<h2 id="what-kind-of-things-are-encrypted" tabindex="-1"><a class="header-anchor" href="#what-kind-of-things-are-encrypted" aria-hidden="true">#</a> What kind of things are encrypted</h2>
<ul>
<li>Secret</li>
<li>Credential</li>
<li>Password</li>
<li>Encryption Key</li>
</ul>
<p><strong>위의 기밀성이 요구되는 정보는 DB에 저장하는 대신, Vault에 위 개체들을 암호화하여 안전하게 저장</strong></p>
<h3 id="seal-unseal" tabindex="-1"><a class="header-anchor" href="#seal-unseal" aria-hidden="true">#</a> Seal / Unseal</h3>
<p>Vault는 <code>Seal / Unseal</code>을 상태로 가진다.</p>
<ul>
<li><code>Seal</code>은 봉인된 상태로, 이 상태에서 Vault는 접근 스토리지 위치와 방법은 알고 있지만, 데이터 해독은 불가능한 상태이다.</li>
<li><code>Unseal</code> 상태로 만들어 마스터키를 구성해야 데이터 해독이 가능하다. <code>Unseal</code>을 위해서 <code>Unseal Key</code>가 필요하다.</li>
</ul>
<h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h2>
<p><img src="https://mktg-content-api-hashicorp.vercel.app/api/assets?product=vault&amp;version=refs%2Fheads%2Fstable-website&amp;asset=website%2Fpublic%2F%2Fimg%2Flayers.png" alt="Architecture"></p>
<ul>
<li>Storage Backend
<ul>
<li>Vault의 암호화된 Secret을 보관하는 곳</li>
</ul>
</li>
<li>Barrier
<ul>
<li>Vault와 Storage Backend 사이의 프록시 역할 (통신 과정에서 반드시 거치는 영역)</li>
<li>Vault는 Barrier 상태에 <code>unsealed</code> 상태가 되어야 접근 가능</li>
</ul>
</li>
<li>Secret Engine
<ul>
<li>Secret의 관리 책임</li>
<li>Secret 관련 작업은 Secret Engine으로 전달되고 Engine 구현체에 따라 상이한 방식으로 저장</li>
<li>Secret Engine Interface 를 활용해 DB, File System 또는 유저가 정의한 방식으로 저장</li>
</ul>
</li>
<li>Audit Device
<ul>
<li>모든 Request / Response의 감사 로깅</li>
</ul>
</li>
<li>Auth Method
<ul>
<li>Vault에 접근하는 클라이언트 인증</li>
<li>인증된 클라이언트의 토큰 반환</li>
</ul>
</li>
<li>Client Token
<ul>
<li>HTTP에서의 세션 ID와 같은 토큰 반환</li>
<li>Vault의 REST API를 사용하는 경우 HTTP 헤더에 토큰을 적재</li>
</ul>
</li>
<li>Secret
<ul>
<li>Vault에서 관리하는 비밀 객체</li>
<li>일정 주기를 가지며, 만료되면 폐기해야 한다.</li>
</ul>
</li>
</ul>
<h2 id="dev-mode" tabindex="-1"><a class="header-anchor" href="#dev-mode" aria-hidden="true">#</a> <code>-dev</code> mode</h2>
<ul>
<li>데이터 <code>In-memory</code> 저장</li>
<li>localhost listening</li>
</ul>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<ul>
<li><a href="https://ehdvudee.tistory.com/59" target="_blank" rel="noopener noreferrer">https://ehdvudee.tistory.com/59<ExternalLinkIcon/></a></li>
</ul>
</template>
