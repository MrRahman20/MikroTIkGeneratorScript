<template>
  <div class="form-group flex items-center">
    <input
      :id="param.id"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="w-4 h-4 text-blue-600 rounded border-gray-300 dark:border-gray-600"
    />
    <label :for="param.id" class="ml-2 text-sm font-medium dark:text-gray-300">
      {{ param.name }}
    </label>
  </div>
</template>

<script setup>
defineProps(['param', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
