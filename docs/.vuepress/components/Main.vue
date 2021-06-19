<template>
  <div>
    <div class="title">
      <h1>Today I Learned</h1>

      <div class="content">
        <div class="name">Tommy's TIL</div>
        <ul>
          <li>
            <a href="https://g1-tommy.github.io/">Blog</a>
          </li>
          <li>
            <a href="https://github.com/g1-tommy">GitHub</a>
          </li>
          <li>
            <a href="https://g1-tommy.github.io/resume">Résumé</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
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