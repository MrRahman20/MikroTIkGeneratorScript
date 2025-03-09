<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">Testimoni Pengguna</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" 
             :key="testimonial.name"
             class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <div class="flex items-center mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full">
            <div class="ml-4">
              <h4 class="font-bold dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-300">{{ testimonial.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Network Engineer',
    avatar: '/avatars/user1.jpg',
    text: 'Tool yang sangat membantu untuk konfigurasi MikroTik secara cepat dan akurat.'
  },
  {
    name: 'Ani Wijaya',
    role: 'IT Administrator',
    avatar: '/avatars/user2.jpg',
    text: 'Menghemat waktu saya dalam setup router MikroTik untuk client.'
  },
  {
    name: 'Dedi Irawan',
    role: 'ISP Owner',
    avatar: '/avatars/user3.jpg',
    text: 'Fitur load balancing dan failover-nya sangat berguna untuk bisnis ISP kami.'
  }
]
</script>
