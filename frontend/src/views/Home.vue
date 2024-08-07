<template>
    <div>
      <h1>Quizzes</h1>
      <div v-for="quiz in quizzes" :key="quiz._id">
        <h2>{{ quiz.title }}</h2>
        <router-link :to="'/quiz/' + quiz._id">Take Quiz</router-link>
      </div>
      <router-link to="/create">Create a New Quiz</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
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
  