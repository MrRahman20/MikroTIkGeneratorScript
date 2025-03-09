<template>
  <div class="form-group">
    <label :for="param.id" class="block text-sm font-medium mb-2 dark:text-gray-300">
      {{ param.name }}
    </label>
    <input
      :id="param.id"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="param.placeholder"
      class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
  </div>
</template>

<script setup>
defineProps(['param', 'modelValue'])
defineEmits(['update:modelValue'])
</script>
