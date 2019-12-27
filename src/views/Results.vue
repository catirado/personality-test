<template>
  <section class="results">
    <Card>
      <div slot="header">
        <h1>Resultado</h1>
      </div>
      <div slot="body">
        <p>Tu estilo de comunicación es {{ personality }}</p>
        <font-awesome-icon :icon="['far', personalityIcon]" />
        <p>{{ personalityInfo}}</p>
      </div>
      <div slot="footer">
        <Button label="Ver informe" @click.native="goToReport"/>
        <Button label="Volver a intentar" @click.native="goToHome"/>
      </div>
    </Card>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import router, { Routes } from '@/router';
import * as resultsHelper from '@/helpers/resultsHelper';
import { AnswerResponse } from '@/models/answer-response';

@Component({
  components: {
    Button,
    Card,
  },
})
export default class Results extends Vue {
  public goToReport(): void {
    router.push({ name: Routes.Report });
  }

  public goToHome(): void {
    router.push({ name: Routes.Home });
  }

  get personality() {
    const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    if (personality == AnswerResponse.Pasive) {
      return 'Pasivo';
    } else if (personality == AnswerResponse.Assertive) {
      return 'Asertivo';
    } else if (personality == AnswerResponse.Aggresive) {
      return 'Agresivo';
    } else {
      return 'Desconocido';
    }
  }

  get personalityIcon() {
    const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    if (personality == AnswerResponse.Pasive) {
      return 'meh';
    } else if (personality == AnswerResponse.Assertive) {
      return 'smile';
    } else if (personality == AnswerResponse.Aggresive) {
      return 'angry';
    } else {
      return 'question';
    }
  }

  get personalityInfo() {
    const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    if (personality == AnswerResponse.Pasive) {
      return 'Pasiva';
    } else if (personality == AnswerResponse.Assertive) {
      return 'Asertiva';
    } else if (personality == AnswerResponse.Aggresive) {
      return 'Agresiva';
    } else {
      return 'Desconocida';
    }
  }
}
</script>
