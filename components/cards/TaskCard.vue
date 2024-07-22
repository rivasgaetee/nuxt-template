<script setup lang="ts">
import type { TaskResponse } from '@/interfaces/responses/Task.response'

const props = defineProps<{
  task: TaskResponse
}>()

const handleChangeStatus = (status: number) => {
}
</script>

<template>
  <VCard>
    <VCardTitle>
      {{ props.task.title }}
    </VCardTitle>
    <VCardText class="text-left">
      {{ props.task.description }}
    </VCardText>
    <VCardActions>
      <VBtn
        v-if="props.task.status.id === 1"
        color="primary"
        @click="handleChangeStatus(2)"
      >
        Iniciar
      </VBtn>
      <VBtn
        v-if="props.task.status.id === 2"
        color="success"
        @click="handleChangeStatus(3)"
      >
        Terminar
      </VBtn>
    </VCardActions>
  </VCard>
</template>
