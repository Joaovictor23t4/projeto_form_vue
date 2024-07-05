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

  function validarNome() {
    const regex = 
  }
})