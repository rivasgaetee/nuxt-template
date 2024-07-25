<script lang="ts" setup>
import { ref } from 'vue'
import { useTasks } from '~/composables/useTasks'
import type { TaskPayload } from '@/interfaces/payload/TaskPayload'

const isDialogVisible = ref(false)
const { addTask } = useTasks()

const title = ref('')
const description = ref('')
const status = ref(1)

const resetForm = () => {
  title.value = ''
  description.value = ''
  status.value = 1
  isDialogVisible.value = false
}

const handleSubmit = () => {
  const newTask: TaskPayload = {
    title: title.value,
    description: description.value,
    status: status.value,
  }

  addTask(newTask)

  resetForm()
}
</script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        size="x-large"
        class="w-100"
      >
        <VIcon
          icon="tabler-plus"
          class="font-weight-bold"
          size="30"
        />
        Agregar nueva tarea
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Agregar Tarea">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <AppTextField
              v-model="title"
              label="Título"
              placeholder="Nueva tarea"
            />
          </VCol>
          <VCol cols="12">
            <AppTextarea
              v-model="description"
              label="Descripción"
              placeholder="¿Qué debes hacer?"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Cerrar
        </VBtn>
        <VBtn @click="handleSubmit">
          Guardar
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
