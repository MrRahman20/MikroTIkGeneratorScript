<template>
  <div class="form-group mb-4 border-b pb-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label :for="`wan${number}_isp`" class="block text-sm font-medium mb-2 dark:text-gray-300">
          WAN ISP-{{ number }}
        </label>
        <input
          :id="`wan${number}_isp`"
          type="text"
          :value="wanValue"
          @input="$emit('update:wanValue', $event.target.value)"
          :placeholder="`Ex: ether${number}`"
          class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :disabled="disabled"
        />
      </div>
      <div>
        <label :for="`gateway${number}`" class="block text-sm font-medium mb-2 dark:text-gray-300">
          Gateway ISP-{{ number }}
        </label>
        <input
          :id="`gateway${number}`"
          type="text"
          :value="gatewayValue"
          @input="$emit('update:gatewayValue', $event.target.value)"
          :placeholder="`Ex: 192.168.${number}.1`"
          class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          :disabled="disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputWanGroup',
  props: {
    number: {
      type: Number,
      required: true
    },
    wanValue: {
      type: String,
      default: ''
    },
    gatewayValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:wanValue', 'update:gatewayValue']
}
</script>
