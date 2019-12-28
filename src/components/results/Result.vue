<template>
    <section class="result">
        <div class="result__header" :class="cssStyle">
            <font-awesome-icon class="result__icon" :icon="['far', icon]" />
            <span class="result__title">{{ title }}</span>
        </div>
        <div class="result__info">
            <slot name="info"></slot>          
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Result extends Vue {
  @Prop()
  public title!: string;
  @Prop()
  public icon!: string;
  @Prop()
  public customStyle!: string;

  get cssStyle() {
      return 'result__header--' + this.customStyle;
  }
}
</script>

<style lang="scss" scoped>
.result {
    &__header {
        text-align: center;
        border-radius: 8px;
        margin: 0 auto;
        padding: 8px;
        justify-content: center;
        align-items: center;
        width: 60%;
        display: flex;
        flex-direction: column;

        &--grey {
            background: #c9c9c9;
            color:#838689;
        }

        &--yellow {
            background: #EBE3AA;
            color:#747346;
        }

        &--dark-grey {
            background: #3A4750;
            color:#fff;
        }
    }

    &__icon {
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 8px;
    }

    &__title {
        text-align: center;
        font-size: 1.6em;
        text-transform: uppercase;
    }

    &__info {
        text-align: left;
        font-size: 0.9em;
    }
}
</style>
