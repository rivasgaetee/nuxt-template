import { defineStore } from 'pinia'
import type { UserResponse } from '@/interfaces/responses/User.response'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserResponse | null,
    token: null as string | null,
  }),
  actions: {
    setUser(user: UserResponse): void {
      localStorage.setItem('user', JSON.stringify(user))
      this.user = user
    },
    setToken(token: string): void {
      localStorage.setItem('token', token)
      this.token = token
    },
    refreshUser(): void {
      const user: string | null = localStorage.getItem('user')
      const token: string | null = localStorage.getItem('token')
      if (user)
        this.user = JSON.parse(user)
      console.log(this.user);
      if (token)
        this.token = token
    },
    getUser(): UserResponse | null {
      const user: string | null = localStorage.getItem('user')
      if (user)
        this.user = JSON.parse(user)

      return this.user
    },
    getToken(): string | null {
      const token: string | null = localStorage.getItem('token')
      if (token)
        this.token = token

      return this.token
    },
    clearAuth(): void {
      this.user = null
      this.token = null
      localStorage.clear()
    },
    persist: true,
  },
})
