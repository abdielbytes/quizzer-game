<template>
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-left">
            <router-link to="/" class="nav-logo">Quizzer</router-link>
          </div>
          <div class="nav-right">
            <button @click="handleLogout" class="logout-button">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    methods: {
      handleLogout() {
        // Clear any authentication tokens or user data
        localStorage.removeItem('token'); // Example: remove token from localStorage
        this.$router.push('/login'); // Redirect to login page
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f7fafc;
    padding: 1rem;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .nav-logo {
    color: #151414;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
  }
  
  .logout-button {
    background-color: #f7fafc;
    color: #000000;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .logout-button:hover {
    background-color: #c53030;
  }
  </style>
  