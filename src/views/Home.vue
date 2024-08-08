<template>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">Hi friend, welcome to our Quizzer App!</h1>
      <p class="mb-6">Would you like to take a quiz or create a quiz?</p>
      <button @click="goToCreateQuiz" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Create a Quiz</button>
      <button @click="goToQuizzes" class="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-700">Take a Quiz</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      goToCreateQuiz() {
        // Check if user is authenticated, redirect to login if not
        if (!this.isAuthenticated()) {
          this.$router.push({ name: 'Login' });
        } else {
          this.$router.push({ name: 'CreateQuiz' });
        }
      },
      goToQuizzes() {
        this.$router.push({ name: 'PublicQuizzes' });
      },
      isAuthenticated() {
        // Placeholder for authentication check
        return false;
      },
    },
  };
  </script>
  