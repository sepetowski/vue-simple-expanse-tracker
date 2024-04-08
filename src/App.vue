<script setup lang="ts">
import HeaderSection from './components/HeaderSection.vue'
import BalanceSection from './components/BalanceSection.vue'
import IncomeExpensesSection from './components/IncomeExpensesSection.vue'
import TransactionsList from './components/TransactionsList.vue'
import AddTransaction from './components/AddTransaction.vue'
import type { Transaction, IncomeAndExpense } from '@/types/types'

import { ref, computed, onMounted } from 'vue'

const transactions = ref<Transaction[]>([])

onMounted(() => {
  const savedTransactions = localStorage.getItem('transactions')
  if (!savedTransactions) return

  const parsedTransactions: Transaction[] = JSON.parse(savedTransactions)
  transactions.value = parsedTransactions
})

const balance = computed(() => {
  return Number(
    transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2)
  )
})

const incomeAndExpense = computed<IncomeAndExpense>(() => {
  const income = Number(
    transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2)
  )

  const expense = Number(
    transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2)
  )

  return {
    income,
    expense
  }
})

const onTransactionSubmited = (transaction: Transaction) => {
  transactions.value.push(transaction)

  saveTransactionsToLocalStorage()
}
const onDeleteTransaction = (id: string) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)

  saveTransactionsToLocalStorage()
}

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<template>
  <HeaderSection />
  <BalanceSection :balance="balance" />
  <IncomeExpensesSection :incomeAndExpense="incomeAndExpense" />
  <TransactionsList :transactions="transactions" @deleteTransaction="onDeleteTransaction" />
  <AddTransaction @transactionSubmitted="onTransactionSubmited" />
</template>
