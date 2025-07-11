<script setup>
import SectionTitle from './SectionTitle.vue';

// Data kontak dengan ikon SVG dan link yang sesuai
const contactDetails = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>`,
    label: 'PHONE',
    value: '+62 858-5939-2512',
    href: 'tel:+6285859392512'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    label: 'EMAIL',
    value: 'naufallwcksn@gmail.com',
    href: 'mailto:naufallwcksn@gmail.com'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>`,
    label: 'GITHUB',
    value: 'Naufallwcksn',
    href: 'https://github.com/Naufallwcksn'
  }
];
</script>

<template>
  <section id="contact" class="container mx-auto px-8 md:px-16 py-24">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <!-- Kolom Kiri: Teks Ajakan -->
      <div class="space-y-4">
        <SectionTitle title="Let's Connect" subtitle="GET IN TOUCH" />
        <p class="text-brand-subtext max-w-md">
          I'm currently available for freelance work and open to discussing new projects. Feel free to reach out to me through any of the platforms below.
        </p>
      </div>
      <!-- Kolom Kanan: Detail Kontak dengan Ikon -->
      <div class="space-y-6">
        <a v-for="item in contactDetails" :key="item.label" :href="item.href" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 group p-4 rounded-lg hover:bg-brand-bg-light transition-colors duration-300">
          <div class="bg-brand-bg-light p-3 rounded-lg shadow-sm text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
            <div v-html="item.icon"></div>
          </div>
          <div>
            <p class="text-brand-subtext text-sm font-semibold">{{ item.label }}</p>
            <p class="font-bold text-brand-text text-lg group-hover:text-brand-primary transition-colors duration-300">{{ item.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
