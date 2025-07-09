
<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/login"><button @click="logout">Logout</button></router-link>
      </li>
    </ul>
  </div>

  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
</style>
