import Vue from 'vue';
import Vuex, { GetterTree, MutationTree } from 'vuex';
import { ActionTree, ActionContext } from 'vuex';
import { Answer } from '@/models/answer';
import { AnswerResponse } from '@/models/answer-response';
import RootState from '@/models/states/rootState';
import menQuestions from './questions_h.json';
import womenQuestions from './questions_m.json';

Vue.use(Vuex);

const state: RootState = {
  answers: [] as AnswerResponse[],
  gender: 'M',
  currentQuestion: 0,
};

const getters: GetterTree<RootState, RootState> = {
  current: (rootState: RootState) => rootState.currentQuestion,
  answers: (rootState: RootState) => rootState.answers,
  questions: (rootState: RootState) => {
    return rootState.gender === 'M' ? womenQuestions : menQuestions;
  },
};

const actions: ActionTree<RootState, any> = {
  answerQuestion: (
    store: ActionContext<RootState, any>,
    answer: Answer) => {
      store.commit('incrementCurrentStep', answer);
      store.commit('setAnswerToQuestion', answer);
  },
  selectGender: (
    store: ActionContext<RootState, any>,
    gender: string) => {
      store.commit('selectGender', gender);
  },
};

const mutations: MutationTree<RootState> = {
  setAnswerToQuestion(rootState: RootState, answer: Answer) {
    rootState.answers[answer.question - 1] = answer.response;
  },
  incrementCurrentStep(rootState: RootState, answer: Answer) {
    rootState.currentQuestion = answer.question;
  },
  selectGender(rootState: RootState, gender: string) {
    rootState.gender = gender;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
