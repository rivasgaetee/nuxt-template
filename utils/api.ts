import { inject } from 'vue'
import type { AxiosInstance } from 'axios'

class ApiService {
  private client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
    console.log('ApiService initialized with client:', client)
  }

  async get<T>(url: string): Promise<T> {
    console.log('GET request to', url)

    const response = await this.client.get<T>(url)

    return response.data
  }

  async post<T, P>(url: string, payload: P): Promise<T> {
    console.log('POST request to', url, 'with payload:', payload)

    const response = await this.client.post<T>(url, payload)

    return response.data
  }

  // TODO: Add PUT and DELETE methods
}

export const useApiService = () => {
  const apiClient = inject<AxiosInstance>('apiClient')
  if (!apiClient) {
    console.error('API client injection failed')
    throw new Error('API client is not provided')
  }
  console.log('API client injected:', apiClient)

  return new ApiService(apiClient)
}
