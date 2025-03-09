<template>
  <!-- Add modal overlay -->
  <div v-if="showDonationModal" 
       class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
       @click.self="showDonationModal = false">
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 relative">
      <!-- Close button -->
      <button 
        @click="showDonationModal = false"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Modal content -->
      <div class="text-center">
        <h3 class="text-xl font-bold mb-4 dark:text-white">Support Project Ini</h3>
        <img src="/qr-code.png" alt="Saweria QR Code" class="mx-auto mb-4 w-48 h-48" />
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Scan QR code untuk mendukung pengembangan project ini melalui Saweria
        </p>
      </div>
    </div>
  </div>

  <!-- Existing content -->
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
    <div class="container mx-auto px-4 py-8">
      <!-- Header with Back Button and Title -->
      <div class="mb-8 flex justify-between items-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
        <div class="flex items-center gap-4">
          <button 
            @click="goBack" 
            class="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="font-medium">Kembali</span>
          </button>
          <div class="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">MikroTik Script Generator</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Generate script configuration</p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-6">
        <!-- Left Sidebar - Categories -->
        <div class="lg:col-span-3">
          <div class="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="p-3 bg-blue-600">
              <h3 class="text-sm font-medium text-white uppercase tracking-wider">Categories</h3>
            </div>
            <nav class="max-h-[calc(100vh-200px)] overflow-y-auto">
              <div class="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
                <div v-for="category in categories" :key="category.id" class="p-2">
                  <div class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1 px-2">
                    {{ category.name }}
                  </div>
                  <div class="space-y-0.5">
                    <button
                      v-for="template in category.templates"
                      :key="template.id"
                      @click="selectTemplate(template.id)"
                      class="w-full text-left px-2 py-1.5 text-sm rounded transition-colors"
                      :class="[selectedTemplate === template.id 
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700']"
                    >
                      {{ template.name }}
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <!-- Right Content Area -->
        <div class="lg:col-span-9 space-y-6">
          <!-- No Template Selected State -->
          <div v-if="!currentTemplate" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div class="text-gray-500 dark:text-gray-400">
              <svg class="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 class="text-lg font-medium mb-2">Pilih Template</h3>
              <p>Silakan pilih template dari daftar kategori di sebelah kiri</p>
            </div>
          </div>

          <!-- Template Selected State -->
          <template v-else>
            <!-- Parameters Form -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div class="p-4 bg-blue-600">
                <div class="flex justify-between items-center">
                  <h2 class="text-lg font-medium text-white">{{ currentTemplate.name }}</h2>
                </div>
              </div>
              <div class="p-6">
                <!-- WAN ISP Configuration Section -->
                <div class="space-y-4">
                  <div class="grid grid-cols-1 gap-4">
                    <!-- Line WAN ISP Selection & Local Target -->
                    <div class="grid grid-cols-2 gap-4">
                      <InputSelect
                        v-model="paramValues.wan_lines"
                        :param="{
                          id: 'wan_lines',
                          name: 'Line WAN ISP',
                          type: 'select',
                          options: ['2 Line WAN ISP', '3 Line WAN ISP', '4 Line WAN ISP', '5 Line WAN ISP', '6 Line WAN ISP']
                        }"
                      />
                      <InputSelect
                        v-model="paramValues.local_target"
                        :param="{
                          id: 'local_target',
                          name: 'Local Target',
                          type: 'select',
                          options: ['IP Address List', 'In. Interface', 'In. Interface List']
                        }"
                      />
                    </div>

                    <!-- Interface Target -->
                    <div class="w-full">
                      <InputText
                        v-model="paramValues.interface_target"
                        :param="{
                          id: 'interface_target',
                          name: 'Interface Target',
                          type: 'text',
                          placeholder: 'LOCAL-IP (RFC1819)'
                        }"
                      />
                    </div>

                    <!-- WAN ISP Inputs -->
                    <div v-for="n in 6" :key="n" class="grid grid-cols-2 gap-4 p-4 border rounded-lg" :class="{'opacity-50': isIspInputDisabled({id: `wan${n}_isp`})}">
                      <div>
                        <label :for="`wan${n}_isp`" class="block text-sm font-medium mb-2 dark:text-gray-300">WAN ISP-{{ n }}</label>
                        <input
                          :id="`wan${n}_isp`"
                          v-model="paramValues[`wan${n}_isp`]"
                          type="text"
                          :placeholder="`Ex: ether${n}`"
                          class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          :disabled="isIspInputDisabled({id: `wan${n}_isp`})"
                        />
                      </div>
                      <div>
                        <label :for="`wan${n}_gateway`" class="block text-sm font-medium mb-2 dark:text-gray-300">Gateway ISP-{{ n }}</label>
                        <input
                          :id="`wan${n}_gateway`"
                          v-model="paramValues[`wan${n}_gateway`]"
                          type="text"
                          :placeholder="`Ex: 192.168.${n}.1`"
                          class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          :disabled="isIspInputDisabled({id: `wan${n}_gateway`})"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Add Generate Script Button -->
                  <div class="flex justify-end mt-6">
                    <button 
                      @click="generateNewScript"
                      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium"
                    >
                      <span>Generate Script</span>
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Script Preview -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 class="text-lg font-medium dark:text-white">Generated Script</h2>
                <button 
                  @click="copyScript" 
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <span>Copy Script</span>
                </button>
              </div>
              <div class="p-4">
                <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-white overflow-auto max-h-[600px]">
                  <pre><code class="language-routeros" v-html="highlightedScript"></code></pre>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-bash'

// Define custom RouterOS syntax
Prism.languages.routeros = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\])*"/,
    lookbehind: true,
    greedy: true
  },
  'command': {
    pattern: /\/[\w-]+(?:\/[\w-]+)*/,
    alias: 'keyword'
  },
  'keyword': /\b(?:add|set|remove|enable|disable|interface|ip|routing|firewall|system)\b/,
  'operator': /=|:/,
  'property': {
    pattern: /[\w-]+(?=\s*=)/,
    alias: 'attr-name'
  },
  'variable': {
    pattern: /\$[\w-]+/,
    alias: 'variable'
  }
}

import { scriptCategories } from '../data/categories'
import { generateScript } from '../utils/scriptGenerator'
import InputWanGroup from '../components/inputs/InputWanGroup.vue'
import InputText from '../components/inputs/InputText.vue'
import InputSelect from '../components/inputs/InputSelect.vue'
import InputNumber from '../components/inputs/InputNumber.vue'
import InputCheckbox from '../components/inputs/InputCheckbox.vue'

const router = useRouter()

const goBack = () => {
  router.push('/')
}

const selectedCategory = ref('')
const selectedTemplate = ref('')
const paramValues = ref({})

const categories = scriptCategories

const getTemplates = computed(() => {
  if (!selectedCategory.value) return []
  return categories.find(c => c.id === selectedCategory.value)?.templates || []
})

const findTemplateById = (templateId) => {
  for (const category of categories) {
    const template = category.templates.find(t => t.id === templateId)
    if (template) return template
  }
  return null
}

const currentTemplate = computed(() => {
  if (!selectedTemplate.value) return null
  return findTemplateById(selectedTemplate.value)
})

const generatedScript = computed(() => {
  if (!currentTemplate.value) return '# Select a template to generate script'
  return generateScript(currentTemplate.value, paramValues.value)
})

const copyScript = () => {
  navigator.clipboard.writeText(generatedScript.value)
}

const getParamComponent = (type) => {
  switch (type) {
    case 'text': return InputText
    case 'number': return InputNumber
    case 'select': return InputSelect
    case 'checkbox': return InputCheckbox
    case 'wan-group': return InputWanGroup
    default: return InputText
  }
}

const highlightedScript = computed(() => {
  return Prism.highlight(
    generatedScript.value,
    Prism.languages.routeros,
    'routeros'
  )
})

const selectTemplate = (templateId) => {
  selectedTemplate.value = templateId
  paramValues.value = {} // Reset parameters
  const template = findTemplateById(templateId)
  if (template) {
    // Pre-fill default values if they exist
    template.parameters.forEach(param => {
      if (param.default !== undefined) {
        paramValues.value[param.id] = param.default
      }
    })
  }
}

const showDonationModal = ref(true) // Show modal on page load

// Add computed property to show/hide ISP inputs based on selection
const visibleIspInputs = computed(() => {
  const lines = Number(paramValues.value?.wan_lines?.charAt(0) || 2)
  return lines
})

// Add computed property for visible parameters
const visibleParameters = computed(() => {
  if (!currentTemplate.value) return []
  
  const params = currentTemplate.value.parameters
  if (currentTemplate.value.id !== 'load-balancing-pcc') return params

  const selectedLines = Number(paramValues.value?.wan_lines?.charAt(0) || 2)
  return params.filter(param => {
    if (!param.id.startsWith('wan')) return true
    const ispNumber = Number(param.id.match(/\d/)?.[0] || 0)
    return ispNumber <= selectedLines
  })
})

// Add helper function to disable ISP inputs
const isIspInputDisabled = (param) => {
  if (!param.id.startsWith('wan')) return false
  const selectedLines = Number(paramValues.value?.wan_lines?.charAt(0) || 2)
  const ispNumber = Number(param.id.match(/\d/)?.[0] || 0)
  return ispNumber > selectedLines
}

// Add generate script function
const generateNewScript = () => {
  // Scroll to script preview
  const scriptPreview = document.querySelector('.script-preview')
  if (scriptPreview) {
    scriptPreview.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  Prism.highlightAll()
})
</script>

<style scoped>
/* Add these styles for better menu scrolling */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #93c5fd;
  border-radius: 2px;
}

nav {
  scrollbar-width: thin;
  scrollbar-color: #93c5fd transparent;
}

@import 'prismjs/themes/prism-tomorrow.css';

.language-routeros {
  background: #1a1a1a !important;
  border-radius: 0.5rem;
}

/* Add custom syntax colors */
.token.command { color: #569cd6; }
.token.property { color: #9cdcfe; }
.token.keyword { color: #c586c0; }
.token.comment { color: #608b4e; }
.token.string { color: #ce9178; }
.token.variable { color: #4fc1ff; }

.dark .dark\:bg-gray-750 {
  background-color: rgb(31, 41, 55);
}

/* Additional styles */
.sticky {
  position: sticky;
  top: 1rem;
}

/* Scrollbar styling */
.overflow-auto::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 4px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5);
  border-radius: 4px;
}

/* Add modal animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Form field styling */
.form-field[data-v-ea42ab91] {
  margin-bottom: 1rem;
}

.form-field[data-v-ea42ab91] label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.form-field[data-v-ea42ab91] input,
.form-field[data-v-ea42ab91] select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.form-field[data-v-ea42ab91] input:focus,
.form-field[data-v-ea42ab91] select:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-color: #3b82f6;
}

.dark .form-field[data-v-ea42ab91] label {
  color: #d1d5db;
}

.dark .form-field[data-v-ea42ab91] input,
.dark .form-field[data-v-ea42ab91] select {
  background-color: #374151;
  border-color: #4b5563;
  color: white;
}

.form-field[data-v-ea42ab91] input:disabled,
.form-field[data-v-ea42ab91] select:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.dark .form-field[data-v-ea42ab91] input:disabled,
.dark .form-field[data-v-ea42ab91] select:disabled {
  background-color: #4b5563;
}
</style>
