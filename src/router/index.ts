import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Gender from '../views/Gender.vue';
import Instructions from '../views/Instructions.vue';
import Results from '../views/Results.vue';
import Report from '../views/Report.vue';
import Credits from '../views/Credits.vue';
import Question from '../views/Question.vue';

Vue.use(VueRouter);

export enum Routes {
  Home = 'home',
  Credits = 'credits',
  Gender = 'gender',
  Instructions = 'instructions',
  Question = 'question',
  Results = 'results',
  Report = 'report',
}

const routes = [
  route('/', Routes.Home, Home),
  route('/gender', Routes.Gender, Gender),
  route('/instructions', Routes.Instructions, Instructions, undefined, undefined, true),
  route('/questions/:question', Routes.Question, Question, undefined, undefined, true),
  route('/results', Routes.Results, Results, undefined, undefined, true),
  route('/report', Routes.Report, Report, undefined, undefined, true),
  route('/credits', Routes.Credits, Credits),
];

const router = new VueRouter({
  routes,
});

function route(
  path: string,
  name: string,
  component?: any,
  children?: RouteConfig[],
  meta?: any,
  props?: any): RouteConfig {
  return { path, name, component, children, meta, props };
}

export default router;
