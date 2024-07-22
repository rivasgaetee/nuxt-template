<script setup lang="ts">
import type { TaskResponse } from '@/interfaces/responses/TaskResponse'

const props = defineProps<{
  task: TaskResponse
}>()

const handleChangeStatus = (status: number) => {
}
</script>

<template>
  <VCard>
    <VCardTitle class="">
      {{ props.task.title }}
    </VCardTitle>
    <VCardText class="d-flex justify-start">
      {{ props.task.description }}
    </VCardText>
    <VCardActions>
      <VBtn
        v-if="props.task.status.id === 1"
        variant="outlined"
        color="primary"
        @click="handleChangeStatus(2)"
      >
        Iniciar
      </VBtn>
      <VBtn
        v-if="props.task.status.id === 2"
        variant="outlined"
        color="success"
        @click="handleChangeStatus(3)"
      >
        Terminar
      </VBtn>
    </VCardActions>
  </VCard>
</template>
