<template>
  <div>
    <div class="title">
      <h1>Today I Learned</h1>

      <div class="content">
        <ul>
          <li>
            <a href="https://kworkbee.github.io/">Blog</a>
          </li>
          <li>
            <a href="https://github.com/kworkbee">GitHub</a>
          </li>
          <li>
            <a href="https://kworkbee.github.io/resume">Résumé</a>
          </li>
        </ul>
      </div>
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