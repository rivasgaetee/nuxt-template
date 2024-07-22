import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import type { TaskResponse } from '@/interfaces/responses/TaskResponse'
import type { TaskPayload } from '@/interfaces/payload/TaskPayload'

const apiService = useNuxtApp().$apiService

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskResponse[],
  }),
  actions: {
    async fetchTasks() {
      this.tasks = await apiService.get('/tasks')
    },
    async addTask(payload: TaskPayload) {
      /* const newTask = {
        id: Date.now(),
        ...payload,
        completed: false,
      } */

      // this.tasks.push(newTask)

      await apiService.post('/tasks', payload)
    },
  },
})
