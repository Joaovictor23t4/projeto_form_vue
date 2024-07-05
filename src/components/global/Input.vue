<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';
import useValidationStore from '@/stores/validation.js';

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

const useValidation = useValidationStore();

const value = reactive({id: `${props.idInput}`, valor: ''});

const emit = defineEmits(['updateInput']);

function sendValue() {
    emit('updateInput', value)
}

function validar(value) {
    console.log(useValidation.validations)
}

console.log(props);
</script>

<template>
    <textarea v-if="props.type === 'textarea'" name="biografia" id="biografia" cols="30" rows="10" :placeholder="props.placeholder"></textarea>
    <input v-else :type="props.type" :placeholder="props.placeholder" :id="props.idInput" v-model="value.valor" :class="(props.idInput !== 'linguagem') ? 'input_default' : 'input_linguagem'" @input="sendValue" @blur="validar()">
</template>

<style scoped>
.input_default {
    width: 300px;
    padding: 10px 20px 10px 20px;
    outline: none;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #4d4c4c;
}
.input_linguagem {
    width: 630px;
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

#biografia {
    width: 630px;
    padding: 15px 20px 0 20px;
    font-size: 1.1rem;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: #4d4c4c;
}
</style>