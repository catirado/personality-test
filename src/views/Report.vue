<template>
  <section class="question-1">
    <h1>Report</h1>
    <Chart :chartdata="chartdata" :options="chartptions"/>
    <h2>Información</h2>
    <p>{{ personalityInfo }}</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chart from '@/components/report/ReportChart.vue';
import * as resultsHelper from '@/helpers/resultsHelper';
import { ReportResult } from '@/models/report';
import { AnswerResponse } from '@/models/answer-response';

@Component({
  components: {
    Chart,
  },
})
export default class Report extends Vue {

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
        backgroundColor: ['#f87979', '#fff000', '#f82228'],
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

  get personalityInfo() {
    const personality = resultsHelper.getPersonality(this.$store.getters.answers) as AnswerResponse;
    if (personality == AnswerResponse.Pasive) {
      return 'Info para pasivo';
    } else if (personality == AnswerResponse.Assertive) {
      return 'Info para asertivo';
    } else if (personality == AnswerResponse.Aggresive) {
      return 'Info para agresivo';
    } else {
      return 'Desconocida';
    }
  }

  private percentageByOption(report: ReportResult[], option: AnswerResponse) {
      const selected = report.filter(r => r.answer == option);
      return selected.length > 0 ? selected[0].percentage : 0;
  }
}
</script>
