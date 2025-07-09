<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username:</label>
        <input v-model="username" type="text" required />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const response = await api.post('account/login', {
      username: username.value,
      password: password.value
    })
    const token = response.data.token
    localStorage.setItem('token', token)
    router.push('/about')
  } catch (err) {
    console.log(username.value)
    error.value = 'Credenciais inválidas ou erro no servidor'
    console.error(err)
  }
}
</script>

<style scoped>
.container {
  background-color: #2c3e50;
  padding: 3rem;
  max-width: 400px;
  margin: 5rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
}

form > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #ecf0f1;
}

input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #34495e;
  color: white;
  font-size: 1rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #1abc9c;
}

button {
  background-color: #e74c3c;
  border: none;
  padding: 0.75rem;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #16a085;
}

p {
  margin-top: 1rem;
  text-align: center;
  color: #e74c3c;
  font-weight: bold;
}
</style>
