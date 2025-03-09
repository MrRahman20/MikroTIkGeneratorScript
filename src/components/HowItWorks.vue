<template>
  <section class="py-20 bg-gray-50/50 dark:bg-gray-800/50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 dark:text-white">
        Langkah Mudah Membuat Script
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        <!-- Add connector lines container -->
        <div class="absolute top-[60px] left-0 right-0 hidden lg:block">
          <div class="h-[2px] bg-gradient-to-r from-blue-200 to-blue-400 w-full transform -translate-y-1/2"></div>
        </div>

        <div v-for="(step, index) in steps" 
             :key="index"
             class="relative flex flex-col items-center p-6"
             v-intersection-observer="onIntersect">
          <!-- Step number with larger circle and better z-index -->
          <div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-20 border-4 border-white dark:border-gray-800 shadow-lg">
            {{ index + 1 }}
          </div>
          
          <!-- Content -->
          <div class="text-center space-y-3">
            <h3 class="text-lg font-semibold dark:text-white">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Pilih Template',
    description: 'Pilih template konfigurasi yang sesuai kebutuhan Anda'
  },
  {
    title: 'Isi Parameter',
    description: 'Masukkan parameter yang diperlukan untuk konfigurasi'
  },
  {
    title: 'Generate Script',
    description: 'Sistem akan menghasilkan script MikroTik yang optimal'
  },
  {
    title: 'Terapkan',
    description: 'Copy script dan terapkan ke router MikroTik Anda'
  }
]

const onIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up')
      observer.unobserve(entry.target)
    }
  })
}
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Remove previous line styling and add new styles */
@media (min-width: 1024px) {
  .grid {
    position: relative;
    z-index: 10;
  }
  
  /* Ensure line is visible in dark mode */
  .dark .bg-gradient-to-r {
    background: linear-gradient(to right, rgb(37 99 235 / 0.2), rgb(37 99 235 / 0.4));
  }
}
</style>
