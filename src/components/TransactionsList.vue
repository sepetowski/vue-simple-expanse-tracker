<script setup lang="ts">
import TransactionListItem from './TransactionListItem.vue'
import type { Transaction } from '@/types/types'
import { useToast } from 'vue-toastification'

defineProps<{ transactions: Transaction[] }>()

const toast = useToast()

const emit = defineEmits<{
  (event: 'deleteTransaction', id: string): void
}>()

const deleteTransaction = (id: string) => {
  emit('deleteTransaction', id)
  toast.info('transaction was deleted')
}
</script>

<template>
  <h2 class="my-4 text-2xl text-white/60">History</h2>
  <div class="flex flex-col gap-2">
    <TransactionListItem
      @deleteTransaction="deleteTransaction"
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </div>
</template>
