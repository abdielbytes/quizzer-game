<!-- src/components/Signup.vue -->

<template>
  <div class="auth-container">
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
// import { supabase } from '../supabase';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async signup() {
      const { error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) {
        this.error = error.message;
      } else {
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
  text-align: center;
}
.auth-container h1 {
  margin-bottom: 20px;
}
.auth-container input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.auth-container button {
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.auth-container button:hover {
  background: #218838;
}
.auth-container .error {
  color: red;
  margin-top: 10px;
}
</style>
