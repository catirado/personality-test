<template>
  <section class="home">
    <img class="home__logo" alt="Test de personalidad" src="../assets/logo.png">
    <div class="home__buttons">
      <Button label="Comienza el test" @click.native="goToQuestions"/>
      <Button label="Créditos" @click.native="goToCredits"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import router, { Routes } from '@/router';

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {
  public goToQuestions(): void {
    router.push({ name: Routes.Gender });
  }

  public goToCredits(): void {
    router.push({ name: Routes.Credits });
  }
}
</script>

<style scoped lang="scss">
.home {
  &__logo {
    width: 320px;
  }

  &__buttons
  {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
.button {
  margin: 12px;
  
}
</style>