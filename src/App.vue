<script setup lang="ts">
import ContainerComponent from './components/Organisms/ContainerComponent.vue'
import TextComponent from './components/Atom/TextComponent.vue'
import WrapContainer from './components/Organisms/WrapContainer.vue'
import InputComponent from './components/Atom/InputComponent.vue'
import ImageComponent from './components/Atom/ImageComponent.vue'
import Colors from './stories/color.json'
import { ref, computed } from 'vue' // Import ref and computed from Vue
import imagePath from './assets/joda_image.png'
import image1 from './assets/foto1.jpg'
import image2 from './assets/foto2.jpg'
import image3 from './assets/foto3.jpg'
import image4 from './assets/foto4.jpg'
import image5 from './assets/foto5.jpg'
import image6 from './assets/foto6.jpg'
import image7 from './assets/foto7.jpg'
import image8 from './assets/foto8.jpg'
import image9 from './assets/foto9.jpg'
import image10 from './assets/foto10.jpg'
import Model from './components/Organisms/Model.vue'

const modelVisible = ref(false)
const selectedSource = ref('')

const clickImage = (source: string) => {
  selectedSource.value = source
  modelVisible.value = true
}

const closeModel = () => {
  modelVisible.value = false
}
</script>

<template>
  <ContainerComponent>
    <template v-slot:container>
      <ImageComponent :isLogo="true" :source="imagePath" />
      <TextComponent :size="1.25" text="Juventude Operária Desportiva de Abrigada" />
    </template>
  </ContainerComponent>
  <ContainerComponent backgroundColor="#E5212A">
    <template v-slot:container>
      <TextComponent :size="1.5" color="#FFF" text="Recebe informação sobre futuros eventos." />
      <InputComponent
        class="input"
        :button="true"
        text="Fica a par das novidades"
        color="#FFF"
        placeholder="Adiciona o teu email"
      />
    </template>
  </ContainerComponent>
  <ContainerComponent>
    <template v-slot:container>
      <TextComponent :size="1.5" text="Descobre um pouco da nossa história em fotos" />
    </template>
  </ContainerComponent>
  <WrapContainer :wrap="true">
    <template v-slot:left>
      <ImageComponent @imageClicked="clickImage" :hasModel="true" :source="image1" />
    </template>
    <template v-slot:middle>
      <ImageComponent @imageClicked="clickImage" :hasModel="true" :source="image2" />
    </template>
    <template v-slot:right>
      <ImageComponent @imageClicked="clickImage" :hasModel="true" :source="image9" />
    </template>
  </WrapContainer>
  <WrapContainer :wrap="true">
    <template v-slot:left>
      <ImageComponent @imageClicked="clickImage" :source="image4" />
    </template>
    <template v-slot:middle>
      <ImageComponent @imageClicked="clickImage" :source="image5" />
    </template>
    <template v-slot:right>
      <ImageComponent @imageClicked="clickImage" :source="image8" />
    </template>
  </WrapContainer>
  <WrapContainer :wrap="true">
    <template v-slot:left>
      <ImageComponent @imageClicked="clickImage" :source="image3" />
    </template>
    <template v-slot:middle>
      <ImageComponent @imageClicked="clickImage" :source="image6" />
    </template>
    <template v-slot:right>
      <ImageComponent @imageClicked="clickImage" :source="image7" />
    </template>
  </WrapContainer>
  <Model @closeModel="closeModel" :source="selectedSource" :visibility="modelVisible" />
</template>

<style scoped>
.input {
  margin-top: 2rem;
}
</style>
