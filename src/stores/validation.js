import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useValidationStore = defineStore('validation', () => {
  const state = reactive({
    messageConfirmPassword: 'Não definido',
    isLogged: false,
    isLoading: false,
  })
  const validations = reactive({
    nome: false,
    email: false,
    senha: false,
    confirmacao_senha: false,
    data_nascimento: false,
    estado: false,
    cidade: false,
    bairro: false,
    rua: false,
    numero: false,
    cep: false,
    hobbie: false,
    biografia: false
  });

  const validarSomenteLetras = (id, value) => {
    const regex = /^[À-Úà-ú\w ]+$/;
    validations[id] = regex.test(value);
    if (validations[id]) {
      return {status: validations[id]};
    } else {
      return {status: false, message: 'Este campo deve conter somente letras!'};
    }
  }

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validations.email = regex.test(email);
    if (validations.email) {
      return {status: validations.email};
    } else {
      return {status: false, message: 'Você deve inserir um email válido!'};
    }
  }

  const validarSenha = (senha) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    validations.senha = regex.test(senha);
    if (validations.senha) {
      return {status: validations.senha}
    } else {
      return {status: validations.senha};
    }
  }

  const validarNumero = (id, numero) => {
    const regex = /^\d+$/;
    validations[id] = regex.test(numero);
    if (validations[id]) {
      return {status: validations[id]};
    } else {
      return {status: false, message: 'Este campo deve conter apenas números'}
    }
  }
  
function spinnerLoading() {
    console.log('Funcionou')
    state.isLoading = true
    setTimeout(() => {
      state.isLoading = false
    }, 1500)
  }

  return { state, validations, validarSomenteLetras, validarSenha, validarNumero, validarEmail, spinnerLoading }
})