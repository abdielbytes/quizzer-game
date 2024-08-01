<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" @submit.prevent="handleLogin">
    <div class="text-center mb-4">
      <h1 class="text-2xl font-semibold text-gray-800">Welcome to Quizzer-Games</h1>
      <p class="text-gray-600">Excuse the boring design for now</p>
      <p class="text-gray-600">Input your email below to sign in via a magic link.</p>
    </div>
    <div class="mb-4">
      <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500" required type="email" placeholder="Your email" v-model="email" />
    </div>
    <div>
      <input
        type="submit"
        class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        :value="loading ? 'Loading...' : 'Send magic link'"
        :disabled="loading"
      />
    </div>
  </form>
</template>
