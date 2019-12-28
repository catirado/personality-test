<template>
  <section class="results">
    <Card>
      <div slot="header">
        <h1>Resultado</h1>
      </div>
      <div slot="body">
        <p>Tu estilo de comunicación es:</p>
        <PasiveResult v-if="personalityIsPasive"/>
        <AssertiveResult v-if="personalityIsAssertive"/>
        <AgressiveResult v-if="personalityIsAggresive"/>
      </div>
      <div slot="footer" class="results__buttons">
        <Button label="Volver" @click.native="goBack"/>
        <Button label="Continuar" @click.native="goToReport"/>
      </div>
    </Card>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import AssertiveResult from '@/components/results/AssertiveResult.vue';
import AgressiveResult from '@/components/results/AgressiveResult.vue';
import PasiveResult from '@/components/results/PasiveResult.vue';
import router, { Routes } from '@/router';
import * as resultsHelper from '@/helpers/resultsHelper';
import { AnswerResponse } from '@/models/answer-response';

@Component({
  components: {
    Button,
    Card,
    AssertiveResult,
    AgressiveResult,
    PasiveResult,
  },
})
export default class Results extends Vue {
  public goToReport(): void {
    router.push({ name: Routes.Report });
  }

  public goBack(): void {
    router.back();
  }

  get personalityIsPasive() {
    return this.personalityIs(AnswerResponse.Pasive);
  }

  get personalityIsAssertive() {
    return this.personalityIs(AnswerResponse.Assertive);
  }

  get personalityIsAggresive() {
    return this.personalityIs(AnswerResponse.Aggresive);
  }

  private personalityIs(response: AnswerResponse): boolean {
    const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    return personality == response;
    // const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    // if (personality == AnswerResponse.Pasive) {
    //   return 'Pasivo';
    // } else if (personality == AnswerResponse.Assertive) {
    //   return 'Asertivo';
    // } else if (personality == AnswerResponse.Aggresive) {
    //   return 'Agresivo';
    // } else {
    //   return 'Desconocido';
    // }
  }
}
</script>

<style scoped lang="scss">
.results {
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
