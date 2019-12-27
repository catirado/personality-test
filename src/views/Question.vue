<template>
  <section class="question-1">
    <h1>Pregunta {{ number }} / {{ totalQuestions }}</h1>
    <p>{{ questionText }}</p>
    <AnswerComponent v-for="answer in answers" :answer="answer" :key="answer.type" @click.native="goToNextQuestion(answer)"></AnswerComponent>
    <Button label="Volver" @click.native="goBack"/>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import AnswerComponent from '@/components/questions/Answer.vue';
import router, { Routes } from '@/router';
import { Answer } from '@/models/answer';
import Button from '@/components/Button.vue';
import { Question as QuestionModel, QuestionAnswer } from '@/models/question';

@Component({
  components: {
    AnswerComponent,
    Button,
  },
  data() {
    return {
      questionNumber: 1,
      totalQuestions: 0,
      question: null,
      last: false,
    };
  },
})
export default class Question extends Vue {
  public created(): void {
    this.$data.questionNumber = +this.$route.params.question;
    this.$data.last = false;
    this.setQuestion(this.$data.questionNumber);
}
  public setQuestion(num: number): void {
    const position = num - 1;
    const questions = this.$store.getters.questions;
    const question = questions[position];
    this.$data.totalQuestions = questions.length;
    this.$data.question = question as QuestionModel;
    if (questions.length === num)  {
      this.$data.last = true;
    }
  }

  public goToNextQuestion(questionAnswer: QuestionAnswer): void {
    const answer: Answer = {
        question: this.$data.questionNumber,
        response: questionAnswer.type,
    };

    this.$store.dispatch('answerQuestion', answer)
      .then(() => {
        if (this.$data.last) {
          router.push({ name: Routes.Results});
        } else {
          const nextPage = this.$data.questionNumber + 1;
          router.push({ name: Routes.Question,
                      params: { question: nextPage.toString()} });
        }
      });
  }

  public goBack(): void {
    router.back();
  }

  get number() {
    return this.$data.questionNumber;
  }

  get total() {
    return this.$data.totalQuestions;
  }

  get questionText() {
    return this.$data.question.text;
  }

  get answers() {
    return this.$data.question.answers;
  }

  @Watch('$route', { immediate: true, deep: true })
    private onUrlChange(val: any) {
      this.$data.questionNumber = +this.$route.params.question;
      this.$data.last = false;
      this.setQuestion(this.$data.questionNumber);
  }
}
</script>
