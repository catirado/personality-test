<template>
    <Result :title=title :icon=icon :customStyle=style>
        <div slot="info">
            <p>A lo mejor tienes razón, pero tus formas hacen que la pierdas. Es 
              posible que consigas lo que quieres en ese momento, pero cuidado… 
              puedes quedarte solo puesto que, aunque no tengamos razón, a los demás 
              nos gusta que ante todo nos respeten. Relájate e intenta empatizar con los otros.</p>
            <p>“Las personas agresivas a menudo violan los derechos, tienen baja autoestima, 
              se sienten sin control y quieren decidir por los otros. Además, las posturas 
              corporales no suelen ser las adecuadas, y se caracterizan por tener el cuerpo 
              erguido, utilizar gestos amenazantes o invadir el espacio del otro”.</p>
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
export default class AgressiveResult extends Vue {
  get title() {
    return 'Agresivo';
  }

  get icon() {
    return 'angry';
  }

  get style() {
    return 'dark-grey';
  }
}
</script>

<style lang="scss" scoped>
</style>