<template>
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Quiz App</h1>
      <div v-if="currentQuestion < questions.length">
        <question 
          :question="questions[currentQuestion]"
          @answered="handleAnswer"
        />
      </div>
      <div v-else>
        <h2 class="text-2xl font-semibold">Quiz Completed!</h2>
        <p>Your score: {{ score }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Question from './Question.vue'
  
  const questions = ref([
    {
      text: 'What is the capital of France?',
      answers: [
        { text: 'Paris', correct: true },
        { text: 'London', correct: false },
        { text: 'Rome', correct: false },
        { text: 'Berlin', correct: false },
      ],
    },
    {
      text: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Earth', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false },
        { text: 'Saturn', correct: false },
      ],
    },
  ])
  
  const currentQuestion = ref(0)
  const score = ref(0)
  
  const handleAnswer = (correct) => {
    if (correct) score.value++
    currentQuestion.value++
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  