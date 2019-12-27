<template>
  <section class="gender">
    <div class="gender__selection">
      <Button label="Hombre" @click.native="goToQuestions('H')"/>
      <Button label="Mujer" @click.native="goToQuestions('M')"/>
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
export default class Gender extends Vue {
  public goToQuestions(gender: string): void {
   this.$store.dispatch('selectGender', gender)
      .then(() => {
        router.push({ name: Routes.Question, params: {question: '1'} });
      });
  }
}
</script>

<style scoped lang="scss">

</style>