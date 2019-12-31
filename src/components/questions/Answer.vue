<template>
  <button class="answer" type="button">{{answer.text}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { QuestionAnswer } from '@/models/question';

@Component
export default class Answer extends Vue {
  @Prop()
  public answer!: QuestionAnswer;
}
</script>

<style lang="scss" scoped>
.answer {
  border-radius: 8px;
  padding: 8px;
  text-align: left;
  border: none;
  user-select: none;
  background: #EBE3AA;
  border: 1px solid #747346;
  color: #262626;
  margin-bottom: 8px;
  width: 100%;

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    cursor: pointer;
    border-radius: 8px;
  }
}
</style>
