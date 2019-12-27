<template>
  <button class="button" type="button">{{label}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: '' })
  public label!: string;
}
</script>

<style lang="scss" scoped>
.button {
  min-height: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    cursor: pointer;
    border-radius: 8px;
  }
}
</style>
