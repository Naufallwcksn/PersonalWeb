<script setup>
import { ref, onMounted, computed } from 'vue'; // Tambahkan computed
import axios from 'axios'; // Tambahkan axios
import SectionTitle from './SectionTitle.vue';

// HAPUS import gambar statis
// HAPUS const aiProjects = [...]
// HAPUS const otherProjects = [...]

// State untuk menampung semua proyek dari API
const allProjects = ref([]);

// Mengambil data dari backend
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    allProjects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});

// Gunakan 'computed' untuk memisahkan proyek secara dinamis
const aiProjects = computed(() =>
  allProjects.value.filter(p => p.isAi)
);

const otherProjects = computed(() =>
  allProjects.value.filter(p => !p.isAi)
);

// Fungsi untuk mendapatkan path gambar (penting untuk Vite)
const getImagePath = (imageName) => {
  // Ini mencocokkan cara Education.vue memuat gambar
  return new URL(`../assets/foto/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <section id="projects" class="container mx-auto px-8 md:px-16 py-24">

    <div class="mb-20">
      <div class="text-center mb-12">
        <SectionTitle title="AI/ML Projects" subtitle="My Main Focus" />
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in aiProjects" :key="project.id">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-brand-bg-light rounded-lg shadow-sm overflow-hidden group"
          >
            <div class="overflow-hidden">
              <img :src="getImagePath(project.imageName)" :alt="project.title" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <p class="text-brand-primary text-sm font-semibold">{{ project.category }}</p>
              <h3 class="text-xl font-bold text-brand-text mt-2">{{ project.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div>
      <div class="text-center mb-12">
        <SectionTitle title="Other Projects" subtitle="More to Explore" />
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in otherProjects" :key="project.id" class="bg-brand-bg-light rounded-lg shadow-sm overflow-hidden group">
          <div class="overflow-hidden">
             <img :src="getImagePath(project.imageName)" :alt="project.title" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <p class="text-brand-primary text-sm font-semibold">{{ project.category }}</p>
            <h3 class="text-xl font-bold text-brand-text mt-2">{{ project.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
