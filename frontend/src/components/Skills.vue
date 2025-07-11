<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);
onMounted(async () => {
try { const response = await axios.get('/api/skills'); skills.value = response.data;
} catch (error) { console.error(error); }
});
</script>

<template>
  <section id="skills" class="container mx-auto px-8 md:px-16 py-24">
    <!-- Menambahkan judul untuk bagian ini -->
    <div class="text-center mb-12">
      <SectionTitle title="My Skills" subtitle="SERVICES" />
    </div>
    <div class="mt-12 grid md:grid-cols-2 gap-8">
      <div v-for="skill in skills" :key="skill.name" class="bg-brand-bg-light p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold text-brand-text">{{ skill.name }}</h3>
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <span class="text-2xl font-bold text-brand-primary">+</span>
          </div>
        </div>
        <p class="text-brand-subtext mt-4">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>
