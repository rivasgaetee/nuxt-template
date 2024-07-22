<script lang="ts" setup>
const isDialogVisible = ref(false)
const title = ref('')
const description = ref('')
const status = ref(1)
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
        <VBtn @click="isDialogVisible = false">
          Guardar
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
