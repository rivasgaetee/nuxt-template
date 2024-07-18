import { useAuthStore } from '~/stores/auth'

export const ApiServiceType = (baseUrl: string) => {
  const getHeaders = () => {
    const authStore = useAuthStore()

    return {
      'Authorization': `Bearer ${authStore.token}`,
      'Content-Type': 'application/json',
    }
  }

  return {
    get: async (endpoint: string) => {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'GET',
        headers: getHeaders(),
      })

      if (!response.ok)
        throw new Error('Failed to fetch')

      return response.json()
    },
    post: async (endpoint: string, data: any) => {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      })

      if (!response.ok)
        throw new Error('Failed to post')

      return response.json()
    },

    // TODO: agregar más métodos como PUT, DELETE, etc.
  }
}

export default ApiServiceType
