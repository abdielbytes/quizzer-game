<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-left text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required 
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-left text-gray-700 font-semibold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              required 
            />
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <p class="text-sm text-gray-600 mt-4 text-center">
            Don't have an account? <a href="/signup" class="text-blue-500 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // Here you can make an API call to log in the user
        // and then redirect them to the create quiz page if successful.
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional scoped styling */
  </style>
  