<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import type { Transaction } from '@/types/types'
import { uuid } from 'vue-uuid'

const name = ref('')
const amount = ref('')

const toast = useToast()

const emit = defineEmits<{
  (event: 'transactionSubmitted', transaction: Transaction): void
}>()

const onSubmit = () => {
  if (!name.value || !amount.value) {
    toast.error('Plase add your transiction data')
    return
  }

  const convertedAmount = parseFloat(amount.value)

  if (isNaN(convertedAmount)) {
    toast.error('Plase add valid amount')
    return
  }

  const transaction: Transaction = {
    id: uuid.v4(),
    name: name.value,
    amount: Number(convertedAmount.toFixed(2))
  }

  emit('transactionSubmitted', transaction)
  toast.success('Transaction added')

  name.value = ''
  amount.value = ''
}
</script>

<template>
  <div class="w-full flex flex-col mt-4">
    <h3 class="mb-4 text-2xl text-white/60">Add new transaction</h3>
    <form class="space-y-4" @submit.prevent="onSubmit">
      <div class="flex flex-col">
        <label class="text-lg text-white/60" for="name">Text</label>
        <input
          class="w-full p-1 rounded-md px-2 text-black"
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter text..."
        />
      </div>
      <div>
        <label class="text-lg text-white/60" for="amount"
          >Amount (negative - expense, positive - income)</label
        >
        <input
          class="w-full p-1 rounded-md px-2 text-black"
          type="text"
          id="amount"
          v-model="amount"
          placeholder="Enter amount..."
        />
      </div>
      <button class="w-full bg-purple-600 p-2 rounded-md">Add transaction</button>
    </form>
  </div>
</template>
