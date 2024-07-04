<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: {
        type: String,
        requirement: true
    },
    placeholder: { 
        type: String,
        requirement: false
    },
    idInput: {
        type: String,
        requirement: true
    },
    styleInput: {
        type: Object,
        requirement: false
    }
});

const value = reactive({id: `${props.idInput}`, valor: ''});

const emit = defineEmits(['updateInput']);

function sendValue() {
    emit('updateInput', value)
}

console.log(props);
</script>

<template>
    <input :type="props.type" :placeholder="props.placeholder" :id="props.idInput" v-model="value.valor" @input="sendValue">
</template>

<style scoped>
input {
    width: 300px;
    padding: 10px 20px 10px 20px;
    outline: none;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #4d4c4c;
}
input::placeholder {
    position: relative;
    font-size: 16px;
    bottom: 1px;
}
</style>