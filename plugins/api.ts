import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(nuxtApp => {
  console.log('Initializing API plugin')

  const rtConfig = useRuntimeConfig()

  const apiClient = axios.create({
    baseURL: rtConfig.public.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  apiClient.interceptors.request.use(config => {
    console.log('Intercepting request', config)// Añadir log

    const authStore = useAuthStore()
    const token = authStore.getToken()
    if (token)
      config.headers.Authorization = `Bearer ${token}`

    return config
  })

  nuxtApp.provide('apiClient', apiClient)
  console.log('API client provided')
})
