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
        const response = await $apiClient.post<TaskResponse>('/tasks/', payload)

        console.log(response.data)
        this.tasks.push(response.data)
      }
      catch (error) {
        console.error('addTask error:', error)
      }
    },
    async updateTaskStatus(taskId: number, status: number) {
      try {
        const { $apiClient } = useNuxtApp()
        const response = await $apiClient.patch<TaskResponse>(`/tasks/${taskId}/`, { status })
        const index = this.tasks.findIndex(task => task.id === taskId)

        if (index !== -1)
          this.tasks[index] = response.data
      }
      catch (error) {
        console.error('updateTaskStatus error:', error)
      }
    },
  },
})
