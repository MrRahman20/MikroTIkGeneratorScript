<template>
  <div class="relative">
    <div class="router-animation" :class="{ 'hover-active': isHovered }" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <img src="/router.png" alt="MikroTik Router" class="router-image absolute-center" />
      <svg viewBox="0 0 400 400" class="w-full h-full">  <!-- Perbesar viewBox -->
        <g transform="translate(200 200)">  <!-- Sesuaikan translate ke tengah viewBox baru -->
          <path class="router-path" d="M-100,-100 L100,-100 L100,100 L-100,100 Z" />  <!-- Perbesar path -->
          <circle class="signal-wave" r="20" cx="0" cy="0" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<style scoped>
.router-animation {
  position: relative;
  width: 500px;
  height: 500px;
  margin: auto;
  transition: transform 0.3s ease;
}

.router-image {
  width: 200px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.router-path {
  fill: none;
  stroke: #2563EB;
  stroke-width: 8;
}

.signal-wave {
  fill: none;
  stroke: #2563EB;
  stroke-width: 4;
  animation: signal-wave 1.5s infinite;
}

@keyframes signal-wave {
  0% {
    r: 20;
    opacity: 1;
  }
  100% {
    r: 150;
    opacity: 0;
  }
}
</style>