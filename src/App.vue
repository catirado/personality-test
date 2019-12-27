<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  /* Colors */
  --yellow: #ffc72c;
  --grey: #3A4750;
  --white: #fff;

  /* Shadows */
  --shadow: 0 3px 6px 0 rgba(0, 0, 0, .1);

  /* Sizes */
  --radius-8: 8px;

  /* Font sizes */
  --letter-s: 1rem;
  --letter-m: 1.2rem;
  --letter-l: 1.4rem;
  --letter-xl: 2rem;
}

html
{
  margin: 0 auto;
  max-width: 480px;
}

body {
  background: var(--grey);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
