<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label>
        Username:
        <input v-model="username" type="text" required />
      </label>
      <br />
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/api'
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
