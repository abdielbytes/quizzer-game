<template>
    <div>
      <h2 class="text-xl font-semibold mb-2">{{ question.text }}</h2>
      <div v-for="(answer, index) in question.answers" :key="index">
        <button 
          @click="answerQuestion(answer.correct)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          {{ answer.text }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    question: Object,
  })
  
  const emit = defineEmits(['answered'])
  
  const answerQuestion = (correct) => {
    emit('answered', correct)
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  