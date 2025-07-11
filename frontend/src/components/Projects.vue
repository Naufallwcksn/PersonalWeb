<script setup>
import SectionTitle from './SectionTitle.vue';
import airQualityImage from '../assets/foto/Screenshot 2025-07-02 070203.png';
import topupinnImage from '../assets/foto/Topupinn.png';

const aiProjects = [
  {
    title: 'Air Quality Predicted',
    category: 'Machine Learning Model',
    image: airQualityImage,
    link: 'https://airqualitypredicted.streamlit.app'
  },
  // Tambahkan proyek AI/ML lainnya di sini
];

const otherProjects = [
  {
    title: 'Topupin',
    category: 'Website',
    image: topupinnImage
  }
];
</script>

<template>
  <section id="projects" class="container mx-auto px-8 md:px-16 py-24">

    <!-- Bagian Proyek AI/ML -->
    <div class="mb-20">
      <div class="text-center mb-12">
        <SectionTitle title="AI/ML Projects" subtitle="My Main Focus" />
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in aiProjects" :key="project.title">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-brand-bg-light rounded-lg shadow-sm overflow-hidden group"
          >
            <div class="overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <p class="text-brand-primary text-sm font-semibold">{{ project.category }}</p>
              <h3 class="text-xl font-bold text-brand-text mt-2">{{ project.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Bagian Proyek Lainnya -->
    <div>
      <div class="text-center mb-12">
        <SectionTitle title="Other Projects" subtitle="More to Explore" />
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in otherProjects" :key="project.title" class="bg-brand-bg-light rounded-lg shadow-sm overflow-hidden group">
          <div class="overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
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
