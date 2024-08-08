<template>
    <div>
      <h1>Quizzes</h1>
      <div v-for="quiz in quizzes" :key="quiz.id">
        <h2>{{ quiz.title }}</h2>
        <router-link :to="'/quiz/' + quiz.id">Take Quiz</router-link>
      </div>
      <router-link to="/create">Create a New Quiz</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'QuizzesPage',
    data() {
      return {
        quizzes: [],
      };
    },
    created() {
      axios.get('http://localhost:5000/api/quizzes')
        .then(response => {
          this.quizzes = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  };
  </script>
  