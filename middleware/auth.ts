import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  if (!process.client)
    return

  const authStore = useAuthStore()

  if (authStore.getToken()) {
    if (to.name === 'login')
      return navigateTo('/')
  }
  else {
    if (to.name !== 'login')
      return navigateTo('/login')
  }
})
