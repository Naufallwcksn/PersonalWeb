<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <!--
    Mengganti 'bg-brand-bg' dengan 'bg-aurora-yellow' untuk menerapkan efek aurora.
    Kita juga tetap menggunakan bg-brand-bg sebagai warna dasar jika gambar gagal dimuat.
  -->
  <div class="bg-brand-bg bg-aurora-earthy font-sans min-h-screen">
    <RouterView />
  </div>
</template>
