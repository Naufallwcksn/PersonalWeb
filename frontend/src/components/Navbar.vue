<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Memperbarui daftar link navigasi agar sesuai dengan template Anda
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Education', href: '#education' },
  { name: 'Skill', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

// State untuk melacak section yang aktif
const activeSection = ref('');

// Fungsi untuk menangani scroll
const handleScroll = () => {
  let currentSectionId = '';
  // Iterasi melalui semua link untuk menemukan section yang aktif
  for (const link of navLinks) {
    const sectionId = link.href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      // Menentukan section aktif jika bagian atasnya berada di area atas viewport
      // Angka 150 adalah offset dari atas, bisa disesuaikan
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSectionId = sectionId;
        break;
      }
    }
  }
  activeSection.value = currentSectionId;
};

// Menambahkan dan menghapus event listener saat komponen dimuat dan dihancurkan
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Panggil sekali saat load untuk set state awal
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="bg-brand-bg sticky top-0 z-50 px-8 md:px-16 py-4 shadow-sm">
    <nav class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="font-bold text-2xl text-brand-text">
        Naufallwcksn
      </div>

      <!-- Navigasi Utama -->
      <ul class="hidden md:flex items-center space-x-8">
        <!-- Menggunakan v-for untuk membuat link secara dinamis -->
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="text-brand-subtext hover:text-brand-primary transition-colors duration-300 pb-2"
            :class="{ 'text-brand-primary font-semibold border-b-2 border-brand-primary': activeSection === link.href.substring(1) }"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Tombol Kontak -->
      <div>
        <a href="#contact" class="inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          Contact us
        </a>
      </div>
    </nav>
  </header>
</template>
