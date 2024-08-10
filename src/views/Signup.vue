<template>
  <div class="min-h-screen flex-center">
    <div class="signup-container">
      <h1 class="signup-title">Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label for="name" class="label">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            class="input" 
            placeholder="Enter your name"
            required 
          />
        </div>
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
            placeholder="Create a password"
            required 
          />
        </div>
        <div class="input-group">
          <label for="confirmPassword" class="label">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            class="input" 
            placeholder="Confirm your password"
            required 
          />
        </div>
        <button 
          type="submit" 
          class="submit-button"
        >
          Sign Up
        </button>
        <p class="login-text">
          Already have an account? <a href="/login" class="login-link">Log in</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import axios from 'axios';

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
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleSignup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      try {
        await axios.post('http://localhost:5000/api/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        this.$router.push('/create');
      } catch (error) {
        console.error('Signup failed:', error);
        alert('Signup failed! Please try again.');
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

.signup-container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.signup-title {
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
  background-color: #48bb78;
  color: #ffffff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #38a169;
}

.login-text {
  font-size: 0.875rem;
  color: #718096;
  margin-top: 1rem;
  text-align: center;
}

.login-link {
  color: #3182ce;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
