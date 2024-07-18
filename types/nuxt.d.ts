import { ApiServiceType } from '~/app/utils/api'

declare module '#app' {
  interface NuxtApp {
    $apiService: ReturnType<typeof ApiServiceType>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $apiService: ReturnType<typeof ApiServiceType>
  }
}
