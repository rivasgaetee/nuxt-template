import { useTasksStore } from '@/stores/task'
import type { TaskPayload } from '@/interfaces/payload/TaskPayload'
import type { TaskResponse } from '@/interfaces/responses/TaskResponse'

export const useTasks = () => {
  const tasksStore = useTasksStore()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchTasks = async () => {
    loading.value = true
    error.value = null
    try {
      await tasksStore.fetchTasks()
    }
    catch (err) {
      error.value = (err as Error).message
    }
    finally {
      loading.value = false
    }
  }

  const addTask = async (task: TaskPayload) => {
    error.value = null
    loading.value = true
    try {
      await tasksStore.addTask(task)
    }
    catch (err) {
      error.value = (err as Error).message
    }
    finally {
      loading.value = false
    }
  }

  const updateTaskStatus = async (taskId: number, status: number) => {
    try {
      await tasksStore.updateTaskStatus(taskId, status)
    }
    catch (err) {
      error.value = (err as Error).message
    }
  }

  const tasksByStatus = (status: number): TaskResponse[] => {
    return tasksStore.tasks.filter(task => task.status.id === status)
  }

  return {
    tasks: tasksStore.tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    tasksByStatus,
    updateTaskStatus,
  }
}
