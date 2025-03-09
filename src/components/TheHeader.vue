<template>
  <header class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-xl font-bold text-gray-900 dark:text-white">
            MikroTik Generator
          </a>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <button 
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span v-if="isDark">🌞</span>
            <span v-else>🌙</span>
          </button>
        </nav>

        <!-- Mobile menu button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span v-if="isMenuOpen">✕</span>
          <span v-else>☰</span>
        </button>
      </div>

      <!-- Mobile menu - now empty since we removed the navigation items -->
      <div v-show="isMenuOpen" class="md:hidden py-4 space-y-4"></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>
