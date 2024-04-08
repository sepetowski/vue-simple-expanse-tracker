<script setup lang="ts">
import type { IncomeAndExpense } from '@/types/types'

defineProps<{ incomeAndExpense: IncomeAndExpense }>()
</script>
<template>
  <div
    class="border min-w-80 border-white/60 shadow-sm p-4 px-8 flex justify-between mt-4 gap-10 items-center rounded-md"
  >
    <div>
      <h3 class="uppercase">Income</h3>
      <p class="text-green-600">+{{ incomeAndExpense.income }}$</p>
    </div>
    <div>
      <h3 class="uppercase">Expense</h3>
      <p class="text-red-600">{{ incomeAndExpense.expense }}$</p>
    </div>
  </div>
</template>
