<template><h1 id="til-with-github-actions" tabindex="-1"><a class="header-anchor" href="#til-with-github-actions" aria-hidden="true">#</a> TIL with Github Actions</h1>
<p>Posted at 21-06-20</p>
<p>Vuepress로 만드는 TIL 사이트. 사이트 배포는 <code>Github Pages</code>에 한다.</p>
<p>로컬에서 빌드해 <code>gh-pages</code> 브랜치에 push 하는 것은 생각보다 번거롭다.</p>
<p>그래서 <code>Github Actions</code>를 사용해 코드가 push 되면 자동으로 빌드되고 배포되도록 하였다.</p>
<h2 id="github-pages-target" tabindex="-1"><a class="header-anchor" href="#github-pages-target" aria-hidden="true">#</a> Github Pages Target</h2>
<p>Settings &gt; Pages 섹션에서 Source 브랜치를 <code>gh-pages</code>로 설정하고 대상 디렉터리는 <code>/</code> (root)로 설정했다.</p>
<h2 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h2>
<p><code>.github/workflows/buildPage.yml</code> 이라는 yaml 파일을 생성했다. yaml 이름은 어떤 걸 쓰던 무관하다.</p>
<p>Action은 <a href="https://github.com/marketplace/actions/vuepress-deploy" target="_blank" rel="noopener noreferrer">vuepress-deploy<ExternalLinkIcon/></a>를 참고했다.</p>
<p>이 때, 나의 증명을 위해서 ACCESS TOKEN이 필요하다. 이 토큰은 <code>Settings (Account) &gt; Developer settings &gt; Personal access tokens</code>에서 생성한다. 이 때, Repo를 수정할 수 있는 권한을 부여한다.</p>
<p><code>Settings (Repo) &gt; Secrets &gt; New secret</code>에서 <code>ACCESS_TOKEN</code>을 생성해 발급받은 토큰을 삽입하면 된다.</p>
</template>
