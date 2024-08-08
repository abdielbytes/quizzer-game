<template>
    <div>
      <h1>{{ quiz.title }}</h1>
      <div v-for="(question, index) in quiz.questions" :key="index">
        <h3>{{ question.questionText }}</h3>
        <ul>
          <li v-for="(option, optIndex) in question.options" :key="optIndex">
            {{ option.optionText }} <span v-if="option.isCorrect">(Correct)</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'QuizPage',
    data() {
      return {
        quiz: {},
      };
    },
    created() {
      axios.get(`http://localhost:5000/api/quizzes/${this.$route.params.id}`)
        .then(response => {
          this.quiz = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  };
  </script>
  