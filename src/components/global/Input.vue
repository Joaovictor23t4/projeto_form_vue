<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';
import { useValidationStore } from '@/stores/validation.js'

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
const statusValidacao = ref({status: 'Não definido'})

const value = reactive({id: `${props.idInput}`, valor: ''});

const emit = defineEmits(['updateInput', 'confirmarSenha']);

function validar(id, value) {
    if (id === 'nome' || id === 'bairro' ||id === 'rua' || id === 'hobbie' || id === 'biografia') {
        statusValidacao.value = useValidation.validarSomenteLetras(id, value);
    } else if (id === 'email') {
        statusValidacao.value = useValidation.validarEmail(value);
    } else if (id === 'senha') {
        statusValidacao.value = useValidation.validarSenha(value);
    } else if (id === 'numero' || id === 'cep') {
        statusValidacao.value = useValidation.validarNumero(id, value);
    } else if (id === 'confirmar_senha') {
        if (useValidation.validations.confirmar_senha === true) {
            statusValidacao.value = {status: true}
        } else {
            statusValidacao.value = {status: false, message: 'As senhas precisam ser iguais!'}
        }
    } else if (id === 'data_nascimento') {
        useValidation.validations.data_nascimento = true;
        statusValidacao.value = {status: true};
    }
}

function sendValue() {
    if (props.idInput !== 'confirmar_senha') {
        emit('updateInput', value)
    } else {
        emit('confirmarSenha', value)
    }
}
</script>

<template>
    <textarea v-if="props.type === 'textarea'" name="biografia" id="biografia" cols="30" rows="10" v-model="value.valor" @input="sendValue" @blur="validar('biografia', value.valor)" :placeholder="props.placeholder" :style="statusValidacao.status === 'Não definido' ? '' : statusValidacao.status === true ? 'border: 1px solid green;' : 'border: 1px solid red;'"></textarea>
    <input v-else :type="props.type" :placeholder="props.placeholder" :id="props.idInput" v-model="value.valor" @input="sendValue" @blur="validar(props.idInput, value.valor)" class="input_default" :style="statusValidacao.status === 'Não definido' ? '' : statusValidacao.status === true ? 'border: 1px solid green;' : 'border: 1px solid red;'">
    <p v-if="useValidation.validations.senha === false && props.idInput == 'senha'" class="alertMessage">Este campo deve conter 20 dígitos, 1 letra Maiúscula, 1 letra minúscula, 1 número e 1 caractere especial</p>
    <p v-else-if="statusValidacao.status === false" class="alertMessage">{{ statusValidacao.message }}</p>
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

.alertMessage {
    width: 300px;
    margin-top: 10px;
    color: red;
}
</style>