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
  display: flex;
  flex-direction: column;
  background-color: rgb(119, 189, 255);
  padding: 5rem;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0.1px 0.1px 1px ;
}

label {
  color: rgb(49, 49, 49);
  font-size: 20px;
}

input {
  padding: 0.5rem;
  background-color: rgb(107, 183, 255);
  border: none;
  outline: none;
}

form > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

</style>