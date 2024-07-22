import { defineStore } from 'pinia'
import type { UserResponse } from '@/interfaces/responses/UserResponse'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserResponse | null,
    token: null as string | null,
  }),
  actions: {
    setUser(user: UserResponse): void {
      if (process.client)
        localStorage.setItem('user', JSON.stringify(user))
      this.user = user
    },
    setToken(token: string): void {
      if (process.client)
        localStorage.setItem('token', token)
      this.token = token
    },
    getUser(): UserResponse | null {
      if (process.client) {
        const user: string | null = localStorage.getItem('user')
        if (user)
          this.user = JSON.parse(user)
      }

      return this.user
    },
    getToken(): string | null {
      if (process.client) {
        const token: string | null = localStorage.getItem('token')
        if (token)
          this.token = token
      }

      return this.token
    },
    clearAuth(): void {
      this.user = null
      this.token = null
      if (process.client)
        localStorage.clear()
    },
  },
})
