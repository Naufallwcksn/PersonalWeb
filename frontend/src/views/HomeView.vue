<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Education from '@/components/Education.vue'; // Menggunakan komponen Education untuk bagian "About Me"
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <!-- Setiap section dibungkus untuk animasi scroll -->
      <div v-animate-on-scroll><Education /></div>
      <div v-animate-on-scroll><Skills /></div>
      <div v-animate-on-scroll><Projects /></div>
      <div v-animate-on-scroll><Contact /></div>
    </main>
  </div>
</template>
