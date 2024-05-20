<template>
    <button class="button" @click="onClick" @mouseover="handleFocus" @mouseleave="handleLeave" :style="style">
        <slot name="icon-left"></slot> 
            {{ text }}
         <slot name="icon-right"></slot>
    </button>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    props: {
        text: {
            type: String,
            default: 'Button'
        },
        textSize: {
            type: Number,
            default: 1
        },
        paddingH: {
            type: Number,
            default: 2
        },
        paddingV: {
            type: Number,
            default: 1
        },
        margin: {
            type: Number,
            default: 2
        },
        backgroundColor: {
            control: 'select',
            options: []
        },
        color: {
            control: 'select',
            options: []
        },
        rounded: {
            type: Boolean,
            default: true
        },
        borderColor: {
            control: 'select',
            default: '#000'
        },
        withouthMargin:{
            type: Boolean,
            default: false
        }
    },
    emits: ['handleClick'],
    setup(props) {
            props = reactive(props);
            return {
            style: computed(() => ({
                paddingLeft: `${props.paddingH}rem`,
                paddingRight: `${props.paddingH}rem`,
                paddingTop: `${props.paddingV}rem`,
                paddingBottom: `${props.paddingV}rem`,
                margin: props.withouthMargin ? `margin: ${props.margin}rem` : '',
                backgroundColor: props.backgroundColor,
                color: props.color,
                borderRadius: props.rounded ? '15px' : null,
                border: `2px solid ${props.borderColor}`,
                fontSize: `${props.textSize}rem`,
            }))
        }
    },
    methods: {
        handleFocus(e) {
            e.target.style.boxShadow = `0 0 20px ${this.borderColor}`
        },
        handleLeave(e) {
            e.target.style.boxShadow = '0 0 0px'
        },
        onClick() {
            this.$emit('handleClick');
        }
    }
}
</script>

<style scoped>
@import '../../assets/main.css';
    .button {
        cursor: pointer;
        outline: none;
    }
    .button > *{
        line-height: 0;
    }
</style>