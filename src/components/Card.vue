<template>
  <div class="card" >
      <div class="card__header">
        <slot name="header"></slot>          
      </div>
      <div class="card__body">
        <slot name="body" v-if="hasBodySlot"></slot>
      </div>
      <div class="card__footer" v-if="hasFooterSlot">
        <slot name="footer"></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
  get hasHeaderSlot() {
    return !!this.$slots.header;
  }

  get hasBodySlot() {
    return !!this.$slots.body;
  }

  get hasFooterSlot() {
    return !!this.$slots.footer;
  }
}
</script>


<style lang="scss" scoped>
.card {
    max-width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .1);
    padding: 16px;

    &__header {
      text-align: left;
    }

    &__footer {
      margin-top: 8px;
    }
}
</style>