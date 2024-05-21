<template>
  <div :style="style" class="input-container">
    <label v-if="text" class="input-label">{{ text }}</label>
    <input :style="input" :placeholder="placeholder" :value="value" />
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
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
    <TextComponent :textAlign="false" color="#FFF" :size="0.9" :text="privacy" />
  </div>
  <div v-if="erro" class="errorMessage">
    <TextComponent
      :textAlign="true"
      color="#FFF"
      :size="1.5"
      text="Erro ao verificar o email, introduz o email e autoriza o tratamento de dados."
    />
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import TextComponent from './TextComponent.vue'

export default {
  components: {
    ButtonComponent,
    TextComponent
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
    value: {
      type: String,
      default: ''
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
    props = reactive(props)
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      })),
      input: computed(() => ({
        border: `1px solid ${props.borderColor}`,
        paddingRight: props.button ? `150px` : '',
        color: props.color
      })),
      erro: computed(() => {
        return false
      })
    }
  },
  methods: {
    onButtonClick() {
      console.log('Input Value 1:')
    }
  }
}
</script>

<style>
@import '../../assets/main.css';
.input-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  border: none;
  background-color: inherit;
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
  background-color: inherit;
  top: -11px;
  font-size: 14px;
  padding: 0px 2px;
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
}
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin-top: 2px;
  margin-right: 5px;
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
  background-color: #141b20;
}

input:focus + .slider {
  box-shadow: 0 0 1px #141b20;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 12px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
