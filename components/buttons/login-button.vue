<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNuxtApp } from '#app'

const { $auth0 } = useNuxtApp()
const user = ref<any>(null)

const login = async () => {
  await $auth0.loginWithRedirect()
}

const getUser = async () => {
  user.value = await $auth0.getUser()
}

onMounted(() => {
  getUser()
})
</script>

<template>
  <VBtn
    block
    type="button"
    @click="login"
  >
    Iniciar Sesión con Auth0
  </VBtn>
</template>
