<template>
  <div class="form-group">
    <label :for="param.id" class="block text-sm font-medium mb-2 dark:text-gray-300">
      {{ param.name }}
    </label>
    <select
      :id="param.id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <option value="">Select {{ param.name }}</option>
      <option v-for="option in param.options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps(['param', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
