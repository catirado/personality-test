<template>
    <Result :title=title :icon=icon :customStyle=style>
        <div slot="info">
            <p>Dices lo que piensas respetando el punto de vista del otro. Sabes que 
              llevar la contraria no es fácil, pero entiendes que a la larga te evitará 
              futuros problemas. No cambies tu forma de comunicarte.</p>
        </div>
    </Result>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Result from '@/components/results/Result.vue';

@Component({
  components: {
    Result,
  },
})
export default class AssertiveResult extends Vue {
  get title() {
    return 'Asertivo';
  }

  get icon() {
    return 'smile';
  }

  get style() {
    return 'yellow';
  }
}
</script>

<style lang="scss" scoped>
</style>