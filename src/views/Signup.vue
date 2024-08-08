<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
        <form @submit.prevent="handleSignup">
          <div class="mb-4">
            <label for="name" class="block text-left text-gray-700 font-semibold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
              required 
            />
          </div>
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
          <div class="mb-4">
            <label for="password" class="block text-left text-gray-700 font-semibold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Create a password"
              required 
            />
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block text-left text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm your password"
              required 
            />
          </div>
          <button 
            type="submit" 
            class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>
          <p class="text-sm text-gray-600 mt-4 text-center">
            Already have an account? <a href="#" class="text-blue-500 hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignupPage',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleSignup() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords don't match!");
          return;
        }
  
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        
        // Here, you can make an API call to register the user
        // and handle the signup process.
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Additional scoped styling */
  </style>
  