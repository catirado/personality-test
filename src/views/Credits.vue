<template>
  <section class="credits">
    <Card>
      <div slot="header">
        <h1>Créditos</h1>
      </div>
      <div slot="body">
        <p>Alicia Marin Solano</p>
      </div>
      <div slot="footer">
        <Button label="Volver" @click.native="goBack"/>
      </div>
    </Card>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import router from '@/router';

@Component({
  components: {
    Button,
    Card,
  },
})
export default class Credits extends Vue {
  public goBack(): void {
    router.back();
  }
}
</script>
