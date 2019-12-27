<template>
  <section class="gender">
    <div class="gender__selection">
      <div class="gender__selection__button" @click="goToQuestions('M')">
        <font-awesome-icon icon="female" />
        <span>Mujer</span>
      </div>
      <div class="gender__selection__button" @click="goToQuestions('H')">
        <font-awesome-icon icon="male" />
        <span>Hombre</span>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import router, { Routes } from '@/router';

@Component({
  components: {
    Button,
  },
})
export default class Gender extends Vue {
  public goToQuestions(gender: string): void {
   this.$store.dispatch('selectGender', gender)
      .then(() => {
        router.push({ name: Routes.Question, params: {question: '1'} });
      });
  }
}
</script>

<style scoped lang="scss">
.gender {
  &__selection {
    &__button {
        min-height: 120px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 16px;
        text-align: center;
        border: none;
        user-select: none;
        background: #838689;
        color: #EBE3AA;
        font-weight: bold;
        border: 1px solid #838689;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        margin-top: 10px;
    }
  }
}
</style>