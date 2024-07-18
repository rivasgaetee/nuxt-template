<script setup lang="ts">
import { onMounted } from 'vue'
import { useTasks } from '~/composables/useTasks'
import { useAuthStore } from '~/stores/auth'

const { tasks, loading, error, fetchTasks } = useTasks()
const authStore = useAuthStore()

onMounted(() => {
  if (authStore.getToken())
    fetchTasks()
})
</script>

<template>
  <VApp>
    <VMain>
      <div class="container">
        <VCard>
          <VCardTitle>Task List</VCardTitle>
          <VCardText>
            <div v-if="loading">Loading tasks...</div>
            <div v-if="error">{{ error }}</div>
            <ul v-if="tasks.length">
              <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
            </ul>
          </VCardText>
        </VCard>
      </div>
    </VMain>
  </VApp>
</template>
