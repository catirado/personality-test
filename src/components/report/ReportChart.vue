<template>
  <canvas ref="canvas" class="chart"></canvas>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Doughnut } from 'vue-chartjs';

@Component({
  extends: Doughnut,
})
export default class ReportChart extends Vue {
  @Prop({ default: null })
  public chartdata: any;

  @Prop({ default: null })
  public options: any;

  public mounted(): void {
    // @ts-ignore
    this.renderChart(this.chartdata, this.options);
  }
}
</script>

<style lang="scss" scoped>
.chart {
}
</style>
