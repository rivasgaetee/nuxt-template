import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { ApiServiceType } from '~/utils/api'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const apiService = ApiServiceType(config.public.apiBaseUrl)

  nuxtApp.provide('apiService', apiService)
})
