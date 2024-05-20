<template>
  <div :style="style" class="wrap-container">
    <div class="left-container" :style="leftStyle">
      <slot name="left"></slot>
    </div>
    <div class="middle-container" :style="middleStyle">
      <slot name="middle"></slot>
    </div>
    <div class="right-container" :style="rightStype">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
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
    props = reactive(props)
    return {
      style: computed(() => ({
        flexDirection: props.column ? 'column' : 'row',
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        textAlign: props.centerContent ? 'center' : 'left'
      })),
      leftStyle: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : '33%'
      })),
      middleStyle: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : '33%'
      })),
      rightStype: computed(() => ({
        flex: props.fullWidth ? '1 0 auto' : '',
        width: props.column && props.fullWidth ? '100%' : '33%'
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
</style>
