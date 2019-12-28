<template>
    <Result :title=title :icon=icon :customStyle=style>
        <div slot="info">
            <p>No dices lo que piensas ni te haces respetar. El miedo a lo que otros piensen de ti, 
              a que no te acepten, o el temor al conflicto, pueden justificar esta actitud, que a 
              corto plazo te puede resultar útil, pero que a la larga puede traerte serios problemas 
              por no establecer tus propios límites. Ten cuidado con tu autoestima.</p>
            <p>“ Las personas inhibidas o pasivas a menudo dejan que violen sus derechos, tienen una 
              baja autoestima, piden oportunidades y dejan que los demás decidan por ellas. Además, 
              su postura corporal no es la correcta, y se caracterizan por tener el cuerpo cerrado y 
              hundido, por realizar movimientos forzados, rígidos e inquietos y por la ausencia de 
              contacto visual”.</p>
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
export default class PasiveResult extends Vue {

  get title() {
    return 'Pasivo';
  }

  get icon() {
    return 'meh';
  }

  get style() {
    return 'grey';
  }
}
</script>

<style lang="scss" scoped>
</style>