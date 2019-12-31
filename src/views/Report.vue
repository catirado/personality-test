<template>
  <section class="report">
    <Card>
      <div slot="header">
        <h1>Informe completo</h1>
      </div>
      <div slot="body">
        <Chart :chartdata="chartdata" :options="chartptions"/>
        <h2>¿Cómo mejorar?</h2>
        <p>La asertividad es una habilidad social que nos permite comunicarnos 
            con los demás de forma positiva, dando a conocer nuestras opiniones, 
            emociones, deseos y necesidades, pero siempre desde el respeto hacia 
            nuestro interlocutor, sin agredir y evitando ser agredido.</p>
        <p>Si eres asertivo gozarás de grandes ventajas como saber decir que 
            no cuando sea necesario y aceptar las críticas de los otros sin que 
            por ello se deteriore tu autoestima. Y, lo más importante, cuando 
            tengas razón, al expresar tus opiniones respetando el punto de vista 
            de los demás, te resultará más fácil hacer valer tus derechos.</p>
        <p>Códigos para mostrar una comunicación asertiva:</p>
        <ul>
         <li>Utilizar un tono de voz firme y directo:</li>
          <ul>
            <li>“Deseo”, “no puedo…”</li>
            <li>“Opino que…”</li>
            <li>“¿Qué piensas…?”</li>
            <li>“Me estoy sintiendo…”</li>
          </ul>
          <li>Postura corporal:</li>
          <ul>
            <li>Postura relajada y abierta del cuerpo</li>
            <li>Movimientos suaves</li>
            <li>Cabeza alta y contacto visual</li>
            <li>Espacio interpersonal adecuado</li>
            <li>Cuerpo orientado hacia el otro.</li>
          </ul>
        </ul>
        <p>Si haces esto conseguirás…</p>
        <ul>
          <li>Proteger tus derechos y respetar los de los demás.</li>
          <li>Sentirte satisfecho.</li>
          <li>Tener confianza en ti mismo.</li>
          <li>Tomar tus propias decisiones.</li>
          <li>Establecer tu posición.</li>
        </ul>
      </div>
       <div slot="footer" class="results__buttons">
        <Button label="Volver" @click.native="goBack"/>
        <Button label="Reintentar" @click.native="goToHome"/>
      </div>
    </Card>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chart from '@/components/report/ReportChart.vue';
import * as resultsHelper from '@/helpers/resultsHelper';
import { ReportResult } from '@/models/report';
import { AnswerResponse } from '@/models/answer-response';
import router, { Routes } from '@/router';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Chart,
    Card,
    Button,
  },
})
export default class Report extends Vue {

  public goBack(): void {
    router.back();
  }

  public goToHome(): void {
    router.push({ name: Routes.Home });
  }

  get answers() {
    return this.$store.getters.answers;
  }

  get chartdata(): any {
    const report = resultsHelper.getReport(this.$store.getters.answers);

    const data = {
      datasets: [{
        data: [
          this.percentageByOption(report, AnswerResponse.Pasive),
          this.percentageByOption(report, AnswerResponse.Assertive),
          this.percentageByOption(report, AnswerResponse.Aggresive),
        ],
        backgroundColor: ['#838689', '#EBE3AA', '#3A4750'],
      }],
      labels: [
        'Pasivo',
        'Asertivo',
        'Agresivo',
      ],
    };
    return data;
  }

  get chartptions(): any {
    return { responsive: true, maintainAspectRatio: true };
  }

  private percentageByOption(report: ReportResult[], option: AnswerResponse) {
      const selected = report.filter((r) => {
        return r.answer == option;
      });
      return selected.length > 0 ? selected[0].percentage : 0;
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