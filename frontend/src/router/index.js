import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import CreateQuiz from '../views/CreateQuiz.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/create',
      name: 'CreateQuiz',
      component: CreateQuiz,
    },
  ],
});
