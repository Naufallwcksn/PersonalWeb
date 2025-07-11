<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// State untuk menyimpan data riwayat pendidikan
const education = ref([]);

// Mengambil data dari backend saat komponen dimuat
onMounted(async () => {
  try {
    // Pastikan URL ini sesuai dengan alamat backend Anda
    const response = await axios.get('/api/education');
    education.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data riwayat pendidikan:', error);
  }
});
</script>

<template>
  <section id="education" class="container mx-auto px-8 md:px-16 py-24 flex flex-col md:flex-row items-center gap-16">
    <!-- Gambar di Kiri -->
    <div class="md:w-1/2 flex justify-center">
       <div class="bg-brand-bg-light p-3 rounded-3xl shadow-lg transform rotate-3">
        <!-- Ganti src dengan path gambar profil Anda -->
        <img src="../assets/foto/foto2.jpg" alt="Foto Profil" class="rounded-2xl w-80">
      </div>
    </div>

    <!-- Konten Teks di Kanan -->
    <div class="md:w-1/2 space-y-6">
      <SectionTitle title="About Me" />
      <p class="text-brand-subtext">
        My enthusiasm lies at the intersection of code, data, and artificial intelligence to create useful technology.
      </p>

      <!-- Bagian Riwayat Pendidikan -->
      <div>
        <h3 class="text-2xl font-bold text-brand-text mb-4 mt-6">Education History</h3>
        <div class="space-y-4">
          <div v-for="edu in education" :key="edu.id" class="bg-brand-bg-light p-4 rounded-lg shadow-sm border-l-4 border-brand-primary">
            <p class="font-bold text-brand-text text-lg">{{ edu.institution }}</p>
            <p class="text-brand-subtext">{{ edu.major }}</p>
            <p class="text-brand-primary font-semibold text-sm mt-1">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
