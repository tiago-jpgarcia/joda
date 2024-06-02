<script setup lang="ts">
import ContainerComponent from './components/Organisms/ContainerComponent.vue'
import TextComponent from './components/Atom/TextComponent.vue'
import WrapContainer from './components/Organisms/WrapContainer.vue'
import InputComponent from './components/Atom/InputComponent.vue'
import ImageComponent from './components/Atom/ImageComponent.vue'
import { ref } from 'vue' // Import ref and computed from Vue
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
import facebook from './assets/facebook.png'
import email from './assets/email.png'
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
      <TextComponent
        :size="1.5"
        color="#FFF"
        text="Não percas nenhuma novidade! Inscreve-te para ficares por dentro de tudo."
      />
      <InputComponent
        class="input"
        :button="true"
        text="Fica a par das novidades"
        color="#FFF"
        placeholder="Adiciona o teu email"
        privacy="Autorizo o tratamento do meu email para receber eventos, informação relacionada com o JODA."
      />
    </template>
  </ContainerComponent>
  <ContainerComponent>
    <template v-slot:container>
      <TextComponent :size="1.5" text="Vê aqui a nossa história em fotos!" />
    </template>
  </ContainerComponent>
  <WrapContainer :centerContent="false" :wrap="true">
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
  <WrapContainer :centerContent="false" :wrap="true">
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
  <WrapContainer :centerContent="false" :wrap="true">
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
  <WrapContainer :wrap="true">
    <template v-slot:left>
      <ImageComponent link="https://facebook.com/jodaabrigada/" :source="facebook" />
    </template>
    <template v-slot:middle>
      <ImageComponent link="mailto:abrigadajoda@gmail.com" :source="email" />
    </template>
    <template v-slot:right>
      <TextComponent :size="1.6" text="Copyright © 2024" />
    </template>
  </WrapContainer>
  <Model @closeModel="closeModel" :source="selectedSource" :visibility="modelVisible" />
</template>

<style scoped>
.input {
  margin-top: 2rem;
}
</style>
