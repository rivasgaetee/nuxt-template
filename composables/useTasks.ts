import { ref } from 'vue'
import { useNuxtApp } from '#app'

export const useTasks = () => {
  const tasks = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const nuxtApp = useNuxtApp()
  const apiService = nuxtApp.$apiService

  const fetchTasks = async () => {
    loading.value = true
    error.value = null
    try {
      tasks.value = await apiService.get('tasks')
    }
    catch (err) {
      error.value = (err as Error).message
    }
    finally {
      loading.value = false
    }
  }

  return {
    tasks,
    loading,
    error,
    fetchTasks
  }
}
