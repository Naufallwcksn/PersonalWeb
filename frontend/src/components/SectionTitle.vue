<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mb-12 text-center">
    <h2 class="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">{{ title }}</h2>
    <div class="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
  </div>
</template>
