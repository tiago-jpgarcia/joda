<template>
  <div class="image-component" :style="style">
    <div v-if="isLogo" class="logo">
      <h1><img :src="source" /></h1>
    </div>
    <div v-else class="image">
      <img @click="onClick" :src="source" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// Define props
const props = defineProps({
  source: {
    type: String,
    required: true
  },
  isLogo: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['imageClicked'])

const onClick = () => {
  emit('imageClicked', props.source)
}

const style = computed(() => {
  return props.center ? 'margin: 0px auto' : ''
})
</script>

<style scoped>
.image-component {
  height: 100%;
}
.logo {
  max-width: 125px;
}
.logo img {
  width: 100%;
}
.image {
  height: 100%;
}
.image img {
  max-width: 100%;
  object-fit: cover;
  cursor: pointer;
  height: 100%;
}
</style>
