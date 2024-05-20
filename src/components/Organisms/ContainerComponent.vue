<template>
  <div :style="style" class="container">
    <slot name="container"></slot>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  props: {
    backgroundColor: {
      control: 'select',
      options: []
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        backgroundImage: `url("${props.backgroundImage}")`
      }))
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.container:has(> .wrap-container) {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
