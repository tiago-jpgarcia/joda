<template>
    <div :style="style" class="input-container">
        <label v-if="text" class="input-label">{{ text }}</label>
        <input 
            :style="input" 
            :placeholder="placeholder" 
            :value="value"
        />
        <ButtonComponent @handleClick="onButtonClick" backgroundColor="#FFF" color="#D01465" borderColor="#FFF" :paddingV="0" :paddingH="1" :withouthMargin="true" class="input-button" v-if="button" :text="inputText" />
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
    components: {
        ButtonComponent
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
        }
    },
    setup(props) {
            props = reactive(props);
            return {
                style: computed(() => ({
                    backgroundColor: props.backgroundColor,
                    
                })),
                input: computed(() => ({
                    border: `1px solid ${props.borderColor}`,
                    paddingRight: props.button ? `150px` : '',
                    color: props.color,
                })),
            }
        },
        methods: {
            onButtonClick() {
                console.log('Input Value 1:');
            }
        }
    };
</script>

<style scoped>
@import '../../assets/main.css';
.input-container {
    position:relative;
    width: 100%;
    max-width: 400px;
    border: none;
    background-color: inherit;
    margin: 1rem auto;
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
    color: #FFF
}

.input-container input{
    outline: none;
    font-size: 1rem;
    padding: 1rem 0.50rem;
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
</style>