<template>
  <div @click="onClick" :style="style" class="model">
    <div class="moldure">
      <img :src="source" />
      <div @click="onClick" class="close-model">X</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  source: {
    type: String,
    required: true
  },
  visibility: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits(['closeModel'])

const onClick = () => {
  emit('closeModel')
}

const style = computed(() => ({
  display: !props.visibility ? 'none' : 'flex'
}))
</script>

<style scoped>
.close-model {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 2px black;
  right: -50px;
  top: -50px;
  text-align: center;
  cursor: pointer;
  font-size: 30px;
}
.model {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(2, 73, 89, 0.8); /* Ajuste a opacidade do model */
  display: flex;
  align-items: center;
  justify-content: center;
}

.moldure {
  width: 960px;
  border: solid 5px white;
  background-color: white; /* Fundo branco para a moldura */
  position: relative;
  /* Centering within the fixed parent */
  display: flex;
  align-items: center;
  justify-content: center;
}

.moldure img {
  width: 100%;
}

@media (max-width: 1200px) {
  .moldure {
    max-width: 90%;
    border: solid 2px white;
  }
  .close-model {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid 2px black;
    right: -10px;
    top: -30px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>
