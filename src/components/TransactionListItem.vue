<script setup lang="ts">
import type { Transaction } from '@/types/types'

defineProps<{ transaction: Transaction }>()

const emit = defineEmits<{
  (event: 'deleteTransaction', id: string): void
}>()

const deleteTransaction = (id: string) => {
  emit('deleteTransaction', id)
}
</script>

<template>
  <div
    class="p-2 border border-r-8 border-white/60 flex justify-between items-center rounded-md relative group z-20 bg-gray-900"
    :class="transaction.amount > 0 ? 'border-r-green-600' : 'border-r-red-600'"
  >
    <p>{{ transaction.name }}</p>

    <p>{{ transaction.amount }}$</p>
    <button
      @click="deleteTransaction(transaction.id)"
      class="group-hover:opacity-100 opacity-0 transition-opacity duration-200 bg-red-500 rounded-r-none border-r border-r-white text-sm z-10 w-6 h-6 rounded-md absolute left-0 translate-x-[-100%]"
    >
      X
    </button>
  </div>
</template>
