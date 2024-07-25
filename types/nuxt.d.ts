import { AxiosInstance } from 'axios'

declare module '#app' {
  interface NuxtApp {
    $apiClient: AxiosInstance
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apiClient: AxiosInstance
  }
}
