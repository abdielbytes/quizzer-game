import { createRouter, createWebHistory } from 'vue-router'; // Import the correct functions
import HomePage from '@/views/Home.vue'; // Updated to match your new component name
// import QuizPage from '@/views/QuizPage.vue'; // Example for another page
import CreateQuizPage from '@/views/CreateQuiz.vue'; // Example for creating quizzes

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
