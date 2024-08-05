<template>
    <div class="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-around">
        <button class="focus:outline-none" @click="navigateTo('take-quiz')">
          <div class="flex flex-col items-center">
            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8-4H8m4 8H8m12-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Take a quiz</span>
          </div>
        </button>
        <button class="focus:outline-none" @click="navigateTo('quiz-history')">
          <div class="flex flex-col items-center">
            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Quiz history</span>
          </div>
        </button>
        <button class="focus:outline-none" @click="navigateTo('create-quiz')">
          <div class="flex flex-col items-center">
            <svg class="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            <span>Create a quiz</span>
          </div>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const navigateTo = (page) => {
    // Implement your navigation logic here
    // For example, using Vue Router:
    // router.push({ name: page })
    console.log(`Navigating to ${page}`)
  }
  </script>
  
  <style scoped>
  /* You can add additional styling here if needed */
  </style>  