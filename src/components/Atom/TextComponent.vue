<template>
    <div :style="style" class="text-component">
        <p v-if="!isTitle" >{{ text }}</p>
        <h1 v-else-if="!isSubTitle">{{ text }}</h1>
        <h2 v-else>{{ text }}</h2>
    </div>
</template>

<script >
    import { reactive, computed } from 'vue';
    export default {
        name: 'TextComponent',
        props: {
            /**
            * This is the text button
            */
            text: {
                type: String,
                default: 'Example Text',
                required: true,
            },
            /**
            * Change text to Bold
            */
            bold: {
                type: Boolean,
                default: false,
            },
            /**
            * Change text size in REM
            */
            size: {
                type: Number,
                default: 2,
            },
            /**
            * Change Text to H1
            */
            isTitle: {
                type: Boolean,
                default: false
            },
            /**
            * When isTitle is active and isSubTitle active the text should be a H2
            */
            isSubTitle: {
                type: Boolean,
                default: false
            },
            /**
            * Change Color Text
            */
            color: {
                control: 'select',
                default: '#000'
            },
            /**
            * Change text to Italic
            */
            italic: {
                type: Boolean,
                default: false
            },
            isUpper: {
                type: Boolean,
                default: false
            },
            textAlign: {
                type: Boolean,
                default: true
            }
        },
        setup(props) {
            props = reactive(props);
            return {
            style: computed(() => ({
                fontSize: `${props.size}rem`,
                fontWeight: props.bold ? 'bold' : 'normal',
                color: props.color,
                fontStyle: props.italic ? 'italic' : 'normal',
                textTransform: props.isUpper ? 'uppercase' : 'normal',
                textAlign: props.textAlign ? 'center' : 'left',
            })),
            }
        },
    }
</script>

<style scoped>
@import '../../assets/main.css';
.text-component {
    line-height: 2.5rem;
}
</style>