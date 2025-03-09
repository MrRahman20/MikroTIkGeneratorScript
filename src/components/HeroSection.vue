<template>
  <section class="min-h-screen flex items-center justify-center pt-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center mb-12">
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mb-6">
          MikroTik Script Generator
          <span class="block text-blue-600 mt-2">Otomatisasi Konfigurasi dalam Hitungan Detik!</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          Buat skrip konfigurasi hanya dengan beberapa klik.
        </p>
        <button 
          @click="goToGenerator"
          class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all">
          Mulai Sekarang
        </button>
      </div>
      <div class="flex justify-center">
        <RouterAnimation />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import RouterAnimation from './RouterAnimation.vue'

const router = useRouter()
const goToGenerator = () => {
  router.push('/generator')
}
</script>
