<template>
  <div class="image-component" :style="style">
    <div v-if="isLogo" class="logo">
      <h1><img :src="source" /></h1>
    </div>
    <div v-else class="image">
      <a v-if="link" :href="link" target="_blank"> <img :src="source" /></a>
      <img v-else @click="onClick" :src="source" />
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
  },
  link: {
    type: String,
    default: ''
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

@media (max-width: 720px) {
  .image {
    text-align: center;
  }
  .image a img {
    max-width: 100%;
    width: auto;
  }

  .image img {
    width: 100%;
    max-height: 300px;
  }
}
</style>
