import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Quizzes.vue';
import CreateQuizPage from '@/views/CreateQuiz.vue';
// import QuizPage from '@/views/QuizPage.vue'; // Example for another page

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  // { path: '/quiz/:id', name: 'QuizPage', component: QuizPage },
  { path: '/create', name: 'CreateQuizPage', component: CreateQuizPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
