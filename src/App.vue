<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/account">Account</router-link>
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
#nav {
  background-color: #2c3e50;
  padding: 1rem;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

li {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

a:hover {
  color: #1abc9c;
}

button {
  background-color: #e74c3c;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c0392b;
}
</style>
