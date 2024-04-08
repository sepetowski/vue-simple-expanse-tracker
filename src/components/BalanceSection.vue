<script setup lang="ts">
defineProps<{ balance: number }>()
</script>

<template>
  <div class="mt-4">
    <h2 class="text-2xl text-white/60">Your balance</h2>
    <h3 class="text-2xl font-bold">{{ balance }}$</h3>
  </div>
</template>
