<template>
  <section id="hero" class="container mx-auto px-8 md:px-16 py-24 flex flex-col md:flex-row items-center gap-8">
    <!-- Konten Teks di Kiri -->
    <div class="md:w-1/2 space-y-6 text-center md:text-left animate-slide-in-left">
      <div class="flex items-center justify-center md:justify-start space-x-2">
        <h1 class="text-5xl font-bold text-brand-text">Hello! I Am</h1>
        <span class="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">Data Scientist</span>
      </div>
      <h2 class="text-6xl font-extrabold text-brand-text leading-tight">Ekananda Naufal Arif Wicaksana</h2>
      <p class="text-brand-subtext max-w-md mx-auto md:mx-0">
        My enthusiasm lies at the intersection of code, data, and artificial intelligence to create useful technology.
      </p>
      <div>
        <a href="#contact" class="inline-block bg-brand-primary text-white font-semibold px-8 py-4 rounded-lg hover:animate-shake">
          Contact Us
        </a>
      </div>
    </div>

    <!-- Gambar di Kanan -->
    <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center relative animate-slide-in-right">
      <div class="bg-brand-bg-light p-4 rounded-3xl shadow-lg transform -rotate-6">
        <!-- Ganti src dengan path gambar profil Anda -->
        <img src="../assets/foto/foto.jpg" alt="Foto Profil Rubel Hossain" class="rounded-2xl w-80">
      </div>
      <!-- Elemen Dekoratif Lingkaran Kuning -->
      <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>
