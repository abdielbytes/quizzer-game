<template>
    <div>
      <h1>Create Quiz</h1>
      <form @submit.prevent="createQuiz">
        <div>
          <label>Title</label>
          <input v-model="title" required />
        </div>
        <div v-for="(question, index) in questions" :key="index">
          <label>Question {{ index + 1 }}</label>
          <input v-model="question.questionText" required />
          <div v-for="(option, optIndex) in question.options" :key="optIndex">
            <label>Option {{ optIndex + 1 }}</label>
            <input v-model="option.optionText" required />
            <label>
              <input type="checkbox" v-model="option.isCorrect" />
              Correct
            </label>
          </div>
          <button type="button" @click="addOption(index)">Add Option</button>
        </div>
        <button type="button" @click="addQuestion">Add Question</button>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        questions: [
          {
            questionText: '',
            options: [
              { optionText: '', isCorrect: false },
            ],
          },
        ],
      };
    },
    methods: {
      addQuestion() {
        this.questions.push({
          questionText: '',
          options: [
            { optionText: '', isCorrect: false },
          ],
        });
      },
      addOption(index) {
        this.questions[index].options.push({ optionText: '', isCorrect: false });
      },
      createQuiz() {
        axios.post('http://localhost:5000/api/quizzes', {
          title: this.title,
          questions: this.questions,
        })
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error);
        });
      },
    },
  };
  </script>
  