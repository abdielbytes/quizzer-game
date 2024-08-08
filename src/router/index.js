import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import LoginPage from '../views/Login.vue';
import PublicQuizzes from '../views/PublicQuizzes.vue';
import CreateQuiz from '../views/CreateQuiz.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/quizzes',
    name: 'PublicQuizzes',
    component: PublicQuizzes,
  },
  {
    path: '/create',
    name: 'CreateQuiz',
    component: CreateQuiz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
