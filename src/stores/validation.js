import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useValidationStore = defineStore('validation', () => {
  const validations = reactive({
    nome: false,
    email: false,
    senha: false,
    data_nascimento: false,
    estado: false,
    cidade: false,
    bairro: false,
    rua: false,
    numero: false,
    cep: false,
    hobbie: false,
    biografia: false
  })

  function validarSomenteLetras(id, value) {
    const regex = /^[a-zA-Z]+$/;
    validations[id] = regex.test(value);
    return validations[id];
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validations.email = regex.test(email);
    return validations.email;
  }

  function validarSenha(senha) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{20,}$/;
    validations.senha = regex.test(senha);
    return validations.senha;
  }

  function validarNumero(numero) {
    const regex = /^\d+$/;
    validations.numero = regex.test(numero);
    return validations.numero;
  }

  return { validations, validarSomenteLetras, validarSenha, validarNumero, validarEmail }
})