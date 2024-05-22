<template>
  <div :style="style" class="wrap-container">
    <div class="left-container" :style="leftStyle">
      <slot name="left"></slot>
    </div>
    <div class="middle-container" :style="middleStyle">
      <slot name="middle"></slot>
    </div>
    <div class="right-container" :style="rightStyle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useWindowSize } from '@vueuse/core'

export default {
  name: 'TextComponent',
  props: {
    column: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    centerContent: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { width } = useWindowSize()
    const reactiveWidth = ref(width)

    const isMobile = computed(() => {
      return reactiveWidth.value <= 1200
    })

    // Update reactiveWidth whenever the window is resized
    const updateWidth = () => {
      reactiveWidth.value = window.innerWidth
    }

    onMounted(() => {
      window.addEventListener('resize', updateWidth)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateWidth)
    })

    props = reactive(props)

    return {
      style: computed(() => ({
        flexDirection: props.column ? 'column' : 'row',
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        textAlign: props.centerContent ? 'center' : 'left',
        alignItems: props.centerContent ? 'center' : 'stretch'
      })),
      leftStyle: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : isMobile.value ? '100%' : '33%'
      })),
      middleStyle: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : isMobile.value ? '100%' : '33%'
      })),
      rightStyle: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : isMobile.value ? '100%' : '33%'
      }))
    }
  }
}
</script>

<style>
.wrap-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: stretch;
}
.wrap-container .right-container,
.wrap-container .left-container,
.wrap-container .middle-container {
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

@media (max-width: 1200px) {
  .wrap-container {
    display: block;
  }
  .wrap-container .right-container,
  .wrap-container .left-container,
  .wrap-container .middle-container {
    width: 100%;
  }
}
</style>
