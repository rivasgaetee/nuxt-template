import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import type { TaskResponse } from '@/interfaces/responses/TaskResponse'
import type { TaskPayload } from '@/interfaces/payload/TaskPayload'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskResponse[],
  }),
  actions: {
    async fetchTasks() {
      try {
        const { $apiClient } = useNuxtApp()
        const response = await $apiClient.get<TaskResponse[]>('/tasks')

        this.tasks = response.data
      }
      catch (error) {
        console.error('fetchTasks error:', error)
      }
    },
    async addTask(payload: TaskPayload) {
      try {
        const { $apiClient } = useNuxtApp()
        const response = await $apiClient.post<TaskPayload, TaskResponse>('/tasks', payload)

        this.tasks.push(response)
      }
      catch (error) {
        console.error('addTask error:', error)
      }
    },
  },
})
