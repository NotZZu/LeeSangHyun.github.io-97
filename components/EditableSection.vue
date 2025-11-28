<template>
  <div v-if="!isEditing">
    <p v-if="multiline" :class="['whitespace-pre-wrap', className]">
      {{ modelValue }}
    </p>
    <span v-else :class="className">{{ modelValue }}</span>
  </div>
  
  <textarea
    v-else-if="multiline"
    :value="modelValue"
    @input="handleInput"
    :class="['min-h-[100px] resize-y rounded-md border border-input bg-background px-3 py-2 text-sm', className]"
  />
  
  <input
    v-else
    type="text"
    :value="modelValue"
    @input="handleInput"
    :class="['rounded-md border border-input bg-background px-3 py-2 text-sm', className]"
  />
</template>

<script setup lang="ts">
interface Props {
  isEditing: boolean
  modelValue: string
  className?: string
  multiline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  multiline: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
