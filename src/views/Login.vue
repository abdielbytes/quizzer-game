<template>
  <div class="min-h-screen flex-center">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email" class="label">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            class="input" 
            placeholder="Enter your email"
            required 
          />
        </div>
        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            class="input" 
            placeholder="Enter your password"
            required 
          />
        </div>
        <button 
          type="submit" 
          class="submit-button"
        >
          Login
        </button>
        <p class="signup-text">
          Don't have an account? <a href="/signup" class="signup-link">Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        
        console.log('Login successful:', response.data);

        // Redirect to the create quiz page
        this.$router.push('/create');
      } catch (error) {
        console.error('Login failed:', error.response.data);
        alert('Login failed! Please check your credentials and try again.');
      }
    },
  },
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
}

.login-container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  margin-bottom: 1rem;
}

.label {
  display: block;
  text-align: left;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
}

.submit-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #3182ce;
  color: #ffffff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #2b6cb0;
}

.signup-text {
  font-size: 0.875rem;
  color: #718096;
  margin-top: 1rem;
  text-align: center;
}

.signup-link {
  color: #3182ce;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
