<template>
  <div>
    <div class="title">
      <h1>Today I Learned</h1>

      <div class="content">
        <header>
          <h2>About This Page</h2>
        </header>
        <blockquote>혼자서 공부하고 익힌 내용을 기록하는 공간입니다.</blockquote>

        <ul>
          <li>
            <a href="https://kworkbee.github.io/">
            <img src="https://img.shields.io/badge/-BLOG-242522.svg?colorA=555555&style=for-the-badge&logoWidth=14" style="max-width: 100%;"></a>
          </li>
          <li>
            <a href="https://github.com/kworkbee">
              <img src="https://camo.githubusercontent.com/6aea43d076c7bf00489f1b347caa33fe5c4d84a8af2983804f8702632f2669ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622532302d2532333132313031312e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/github%20-%23121011.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;">
            </a>
          </li>
          <li>
            <a href="https://about.g1tommy.me/resume">
              <img src="https://camo.githubusercontent.com/1f2b657774add0cab836314db1aed5f79e24ff1882d7914966355120358264b8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d50726f66696c652d626c75653f7374796c653d666f722d7468652d6261646765" alt="Profile" data-canonical-src="https://img.shields.io/badge/-Profile-blue?style=for-the-badge" style="max-width: 100%;">
            </a>
          </li>
        </ul>

        <p>틀린 부분에 대해서 수정사항을 보내주시면 저에게 큰 힘이 됩니다 :)</p>
        <p><i>작성한 내용이 정확하지 않을 수 있으니 다른 게시물로 펌은 자제해주시면 감사하겠습니다.</i></p>
      </div>
      <hr />

      <section id="footer">
        <header>
          <h3>Contact me through</h3>
        </header>
        <ul>
          <li>
            <img src="https://camo.githubusercontent.com/571384769c09e0c66b45e39b5be70f68f552db3e2b2311bc2064f0d4a9f5983b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476d61696c2d4431343833363f7374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" alt="Gmail Badge" data-canonical-src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" style="max-width: 100%;">
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

@font-face {
    font-family: '11STREETGothic';
    src: url('../fonts/11STREET_Gothic_regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: '11STREETGothic';
    src: url('../fonts/11STREET_Gothic_light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: '11STREETGothic';
    src: url('../fonts/11STREET_Gothic_bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
}

html, body {
  font-family: "Noto Sans KR", "11STREETGothic", sans-serif;
  font-style: 400;
  font-size: 16px;
}

.sidebar-heading > span:nth-of-type(1), .site-name {
  font-family: "11STREETGothic";
  font-weight: 700;
}

h1 {
  font-family: "11STREETGothic";
  font-weight: 700;
  font-size: 4rem;
}

h2, h3, h4, h5, h6 {
  font-family: "11STREETGothic";
  font-weight: 400;
}

.sidebar-links > li > a {
  font-family: "11STREETGothic";
  font-weight: 300;
}

.name {
  font-size: 1.6rem;
}

ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 3.5rem;
  }

  .name {
    font-size: 1.4rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 2.6rem;
  }
}
</style>