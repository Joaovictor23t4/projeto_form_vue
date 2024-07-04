<script setup>
import Input from '@/components/global/Input.vue';
import Label from '@/components/global/Label.vue';
import { ref, reactive, computed } from 'vue';

const inputInfo = [
  {
    id: 'nome',
    text_label: 'Seu nome',
    type: 'text',
    placeholder: 'Escreva seu nome',
  },
    {
    id: 'email',
    text_label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
  },
    {
    id: 'senha',
    text_label: 'Senha',
    type: 'password',
    placeholder: 'Senha1234!',
  },
  {
    id: 'confirmacao-senha',
    text_label: 'Confirmar senha',
    type: 'password',
    placeholder: 'Repita sua senha',
  },
  {
    id: 'data_nascimento',
    text_label: 'Data de nascimento',
    type: 'date',
    placeholder: '',
  },
  {
    id: 'estado',
    text_label: 'Estado',
    type: 'text',
    placeholder: 'Informe seu estado',
  },
  {
    id: 'cidade',
    text_label: 'Cidade',
    type: 'text',
    placeholder: 'Informe sua cidade',
  },
  {
    id: 'bairro',
    text_label: 'Bairro',
    type: 'text',
    placeholder: 'Informe seu bairro',
  },
    {
    id: 'rua',
    text_label: 'Rua',
    type: 'text',
    placeholder: 'Informe sua rua',
  },
    {
    id: 'numero',
    text_label: 'Número',
    type: 'text',
    placeholder: 'Informe seu número',
  },
    {
    id: 'cep',
    text_label: 'CEP',
    type: 'text',
    placeholder: 'Informe seu CEP',
  },
]

const estados = [
  { uf: 'AC', name: 'Acre' },
  { uf: 'AL', name: 'Alagoas' },
  { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' },
  { uf: 'BA', name: 'Bahia' },
  { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' },
  { uf: 'ES', name: 'Espírito Santo' },
  { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' },
  { uf: 'MT', name: 'Mato Grosso' },
  { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' },
  { uf: 'PA', name: 'Pará' },
  { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' },
  { uf: 'PE', name: 'Pernambuco' },
  { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' },
  { uf: 'RN', name: 'Rio Grande do Norte' },
  { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' },
  { uf: 'RR', name: 'Roraima' },
  { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' },
  { uf: 'SE', name: 'Sergipe' },
  { uf: 'TO', name: 'Tocantins' }
]

const signInForm = reactive({
  nome: '',
  email: '',
  senha: '',
  data_nascimento: '',
  estado: '',
  cidade: '',
  bairro: '',
  rua: '',
  numero: '',
  cep: '',
  hobbies: '',
  linguagem_programacao: '',
  biografia: ''
});

const senhaConfirmada = reactive({senha: '', validacao: false})

function updateInput(value) {
  if (value.id == 'confirmacao-senha') {
    senhaConfirmada.senha = value.valor
    console.log(senhaConfirmada)
  }
  signInForm[value.id] = value.valor
}
</script>

<template>
  <div class="main-container">
    <div class="container-description">
      <h1>Cadastrar-se</h1>
    </div>
      <div class="container-of-container-form">
        <div class="container-form">
          <form action="" class="form_cadastro">
            <div class="container-inputs" v-for="(input, index) in inputInfo" :key="index">
              <div class="excessao" v-if="index === 5">
                <select name="estado" id="estado" v-if="index === 5">
                  <option v-for="(estado, index) in estados" :key="index" value="estado.uf">{{ estado.name }}</option>
                </select>
              </div>
                <div class="normal" v-else>
                  <Label :forId="input.id" :text="input.text_label" />
                  <Input :type="input.type" :placeholder="input.placeholder" :idInput="input.id" @updateInput="updateInput" />
                </div>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>


<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
}

.container-description {
  display: flex;
  height: 45%;
  background: rgb(2,0,36);
  background: linear-gradient(160deg, rgba(2,0,36,1) 0%, rgba(37,165,247,1) 0%, rgba(16,16,199,1) 100%);
}

.title {
  color: #a1adb1;
}

.container-of-container-form {
  position: relative;
  display: grid;
  justify-items: center;
  bottom: 100px;
}

.container-form {
  display: flex;
  justify-content: center;
  width: 75%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}

.form_cadastro {
  display: flex;
  flex-wrap: wrap;
  column-gap: 35px;
  width: 100%;
  height: 85%;
  padding: 60px 60px 60px 60px;
}
</style>