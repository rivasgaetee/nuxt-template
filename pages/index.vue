<script setup lang="ts">
import TaskTable from '@/components/tables/TaskTable.vue'

definePageMeta(
  {
    middleware: 'auth',
  },
)
</script>

<template>
  <div>
    <TaskTable />
  </div>
</template>
