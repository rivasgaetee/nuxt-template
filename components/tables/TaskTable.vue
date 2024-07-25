<script setup lang="ts">
import { onMounted } from 'vue'
import { useTasks } from '~/composables/useTasks'

const { fetchTasks, tasksByStatus, updateTaskStatus } = useTasks()

const onTaskAdded = () => {
  console.log('Agregar toast o alerta')
}

const updateStatus = async (taskId: number, status: number) => {
  await updateTaskStatus(taskId, status)
}

onMounted(() => {
  fetchTasks()
})
</script>

<template>
  <VApp>
    <VMain>
      <VContainer>
        <VRow>
          <VCol cols="12" sm="4">
            <h2>Nuevas</h2>
            <AddTaskForm @task-added="onTaskAdded" />
            <VRow>
              <VCol
                v-for="task in tasksByStatus(1)"
                :key="task.id"
                cols="12"
              >
                <TaskCard
                  :task="task"
                  @update-status="updateStatus"
                />
              </VCol>
            </VRow>
          </VCol>
          <VCol cols="12" sm="4">
            <h2>Iniciadas</h2>
            <VRow>
              <VCol
                v-for="task in tasksByStatus(2)"
                :key="task.id"
                cols="12"
              >
                <TaskCard
                  :task="task"
                  @update-status="updateStatus"
                />
              </VCol>
            </VRow>
          </VCol>
          <VCol cols="12" sm="4">
            <h2>Completadas</h2>
            <VRow>
              <VCol
                v-for="task in tasksByStatus(3)"
                :key="task.id"
                cols="12"
              >
                <TaskCard :task="task" />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>
