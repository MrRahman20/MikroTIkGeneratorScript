s<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" 
             :key="feature.title"
             class="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-3xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-bold mb-2 dark:text-white">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🚀',
    title: 'Cepat & Mudah',
    description: 'Tidak perlu coding, cukup input parameter.'
  }
]
</script>
