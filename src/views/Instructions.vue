<template>
  <section class="instructions">
    <Card>
      <div slot="header">
        <h1>Instrucciones</h1>
      </div>
      <div slot="body">
        <p>A continuación se le mostrarán 30 preguntas relacionadas con su comportamiento en diferentes situaciones cotidianas. Por favor, seleccione aquella respuesta que mejor se adapte a lo que usted haría en esa escena concreta.</p>
        <p>Es importante que sea sincero y responda con la opción que se aproxime más a su forma de actuar. No se trata de seleccionar lo que usted considera correcto sino lo que hace habitualmente.</p>
      </div>
      <div slot="footer" class="instructions__buttons">
        <Button label="Volver" @click.native="goBack"/>
        <Button label="Comenzar" @click.native="goToQuestions"/>
      </div>
    </Card>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import router, { Routes } from '@/router';

@Component({
  components: {
    Button,
    Card,
  },
})
export default class Instructions extends Vue {
  public goBack(): void {
    router.back();
  }
  public goToQuestions(gender: string): void {
   router.push({ name: Routes.Question, params: {question: '1'} });
  }
}
</script>

<style scoped lang="scss">
.instructions {
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
