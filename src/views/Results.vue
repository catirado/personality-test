<template>
  <section class="results">
    <Card>
      <div slot="header">
        <h1>Resultado</h1>
      </div>
      <div slot="body">
        <p>Tu personalidad es {{ personality }}</p>
        <Button label="Ver informe" @click.native="goToReport"/>
      </div>
      <div slot="footer">
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
