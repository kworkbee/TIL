<template>
  <div>
    <div class="title">
      <h1>Today I Learned</h1>

      <div class="content">
        <div class="name">Tommy's TIL</div>
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

<style>
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
  font-family: "11STREETGothic";
  font-style: 400;
}

h1 {
  font-size: 5rem;
}

.name {
  font-size: 2rem;
}

ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>