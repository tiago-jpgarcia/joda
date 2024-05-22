<template>
  <div>
    <div v-if="loading" class="loading">
      <ImageComponent class="spinner" :source="JodaImage" />
    </div>
    <div :style="style" class="input-container">
      <label v-if="text" class="input-label">{{ text }}</label>
      <input :style="input" :placeholder="placeholder" v-model="email" />
      <ButtonComponent
        @handleClick="onButtonClick"
        backgroundColor="#FFF"
        color="#D01465"
        borderColor="#FFF"
        :paddingV="0"
        :paddingH="1"
        :withouthMargin="true"
        class="input-button"
        v-if="button"
        :text="inputText"
      />
    </div>
    <div class="privacy">
      <label class="switch">
        <input v-model="check" type="checkbox" />
        <span class="slider round"></span>
      </label>
      <TextComponent :textAlign="false" color="#FFF" :size="0.9" :text="privacy" />
    </div>
    <div v-if="erro">
      <TextComponent
        class="erro"
        :textAlign="true"
        color="#856404"
        :size="1.3"
        text="Erro ao verificar o email ou a autorização de dados. Tenta novamente."
      />
    </div>
    <div v-if="sub">
      <TextComponent
        class="subMessage"
        :textAlign="true"
        color="#FFF"
        :size="1.3"
        text="Obrigado, seu email foi guardado com sucesso."
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import TextComponent from './TextComponent.vue'
import ImageComponent from './ImageComponent.vue'
import JodaImage from '../../assets/joda_image.png'

export default {
  components: {
    ButtonComponent,
    TextComponent,
    ImageComponent
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    inputText: {
      type: String,
      default: 'SUBSCREVE'
    },
    button: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      control: 'select',
      options: []
    },
    borderColor: {
      control: 'select',
      default: '#000'
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    color: {
      type: String,
      default: '#FFF'
    },
    privacy: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const email = ref('')
    const check = ref(false)
    const erro = ref(false)
    const sub = ref(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const loading = ref(false)

    const style = computed(() => ({
      backgroundColor: props.backgroundColor
    }))

    const input = computed(() => ({
      border: `1px solid ${props.borderColor}`,
      paddingRight: props.button ? `150px` : '',
      color: props.color
    }))

    const onButtonClick = () => {
      if (emailRegex.test(email.value) && check.value) {
        erro.value = false
        addEmail(email.value)
      } else {
        erro.value = true
        sub.value = false
      }
    }

    const addEmail = async (email) => {
      addLoading()
      try {
        const response = await fetch('https://joda-646f1b621967.herokuapp.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        })
        if (response.ok) {
          removeLoading()
          email = ''
          erro.value = false
          sub.value = true
        } else {
          removeLoading()
          email = ''
          erro.value = true
          sub.value = false
        }
      } catch (error) {
        removeLoading()
        email = ''
        erro.value = true
        sub.value = false
      }
    }

    const addLoading = () => {
      loading.value = true
    }

    const removeLoading = () => {
      loading.value = false
    }

    return {
      email,
      check,
      erro,
      sub,
      style,
      input,
      onButtonClick,
      addEmail,
      JodaImage,
      loading,
      removeLoading,
      addLoading
    }
  }
}
</script>

<style>
@import '../../assets/main.css';

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 100px;
}

.spinner {
  display: block;
  width: 50px;
}

@keyframes spin {
  0% {
    transform: rotateY(0deg); /* Start vertical rotation from 0 degrees */
    scale: 1;
  }
  100% {
    transform: rotateY(360deg); /* End vertical rotation at 360 degrees */
    scale: 2;
  }
}

.spinner {
  animation: spin 1.2s ease-out -1.2s infinite alternate forwards; /* Adjust animation duration or timing function as needed */
}

.input-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  border: none;
  margin: 1.5rem auto;
}
.input-button {
  position: absolute;
  margin: 0px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
}
.input-label {
  position: absolute;
  left: 10px;
  top: -11px;
  font-size: 14px;
  padding: 0px 2px;
  background-color: #e5212a;
  color: #fff;
}

.input-container input {
  outline: none;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  width: inherit;
  background-color: inherit;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.input-container input::placeholder {
  opacity: 1;
  color: white;
}

input::placeholder {
  font-size: 12px;
}
.privacy {
  max-width: 400px;
  display: flex;
  margin: 0 auto;
}

.privacy p {
  line-height: 1.2rem;
  max-width: 400px;
  margin-left: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin-top: 2px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #3f51b5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3f51b5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 12px;
}

.slider.round:before {
  border-radius: 50%;
}

.erro {
  background-color: #fff3cd; /* Soft yellow background */
  padding: 0.5rem;
  border: 1px solid #ffeeba; /* Light yellow border */
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  margin: 1rem auto;
}

.subMessage {
  background-color: #22b800; /* Soft yellow background */
  padding: 0.5rem;
  border: 1px solid #22b800; /* Light yellow border */
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  margin: 1rem auto;
}
</style>
