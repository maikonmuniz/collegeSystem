<template>
  <div class="container">
    <h2>Cadastro de Usuário</h2>
    <form @submit.prevent="handleAccount">

      <div>
        <label>Primeiro Nome:</label>
        <input v-model="firstName" type="text" required />
      </div>

      <div>
        <label>Segundo Nome:</label>
        <input v-model="lastName" type="text" required />
      </div>

      <div>
        <label>Username:</label>
        <input v-model="usernameAccount" type="text" required />
      </div>

      <div>
        <label>Password:</label>
        <input v-model="passwordAccount" type="password" required />
      </div>

      <div>
        <label>Password 2:</label>
        <input v-model="password2" type="password" required />
      </div>

      <div>
        <label>Cpf:</label>
        <input v-model="cpf" type="text" required />
      </div>

      <button type="submit">Cadastrar</button>
    </form>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import api from '../services/api'


  const firstName = ref('')
  const lastName = ref('')
  const usernameAccount = ref('')
  const passwordAccount = ref('')
  const password2 = ref('')
  const cpf = ref('')
  const error = ref('')
  const router = useRouter()

  const handleAccount = async () => {

    console.log(usernameAccount.value)

    try {
      const response = await api.post('account/register', {
        firstName: firstName.value,
        lastName: lastName.value,
        cpf: cpf.value,
        username: usernameAccount.value,
        password: passwordAccount.value,
        idTypeAccount: 8
      })
      console.log(response)
      router.push('/about')
    } catch (err) {
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
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
}

form > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
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
  color: rgb(255, 255, 255);
  font-size: 1rem;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #1abc9c;
}

button {
  background-color: #1abc9c;
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
