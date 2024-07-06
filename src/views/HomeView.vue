<script setup>
import Input from '@/components/global/Input.vue';
import Label from '@/components/global/Label.vue';
import Loading from '@/components/Loading.vue';
import MostrarDados from '@/components/MostrarDados.vue';
import axios from 'axios';
import { useValidationStore } from '@/stores/validation.js';
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';

const useValidation = useValidationStore();

const inputInfo = [
  {
    id: 'nome',
    text_label: 'Seu nome',
    type: 'text',
    placeholder: 'Escreva seu nome'
  },
  {
    id: 'email',
    text_label: 'Email',
    type: 'email',
    placeholder: 'email@example.com'
  },
  {
    id: 'senha',
    text_label: 'Senha',
    type: 'password',
    placeholder: 'Senha1234@'
  },
  {
    id: 'confirmacao_senha',
    text_label: 'Confirmar senha',
    type: 'password',
    placeholder: 'Repita sua senha'
  },
  {
    id: 'data_nascimento',
    text_label: 'Data de nascimento',
    type: 'date',
    placeholder: ''
  },
  {
    id: 'estado',
    text_label: 'Estado',
    type: 'text',
    placeholder: 'Informe seu estado'
  },
  {
    id: 'cidade',
    text_label: 'Cidade',
    type: 'text',
    placeholder: 'Informe sua cidade'
  },
  {
    id: 'bairro',
    text_label: 'Bairro',
    type: 'text',
    placeholder: 'Informe seu bairro'
  },
  {
    id: 'rua',
    text_label: 'Rua',
    type: 'text',
    placeholder: 'Informe sua rua'
  },
  {
    id: 'numero',
    text_label: 'Número',
    type: 'text',
    placeholder: 'Informe seu número'
  },
  {
    id: 'cep',
    text_label: 'CEP',
    type: 'text',
    placeholder: 'Informe seu CEP'
  },
  {
    id: 'hobbie',
    text_label: 'Hobbie',
    type: 'text',
    placeholder: 'Escreva um hobbie que você gosta'
  },
  {
    id: 'github',
    text_label: 'Github',
    type: 'text',
    placeholder: 'Escreva seu usuário do Github'
  },
  {
    id: 'linguagem',
    text_label: 'Linguagem de Programação',
    type: 'text',
    placeholder: 'Escreva sua linguagem de programação favorita'
  },
  {
    id: 'biografia',
    text_label: 'Biografia',
    type: 'textarea',
    placeholder: 'Escreva uma pequena biografia sua.'
  },
]

const states = [
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
  estado: 'Selecione um estado',
  cidade: 'Selecione uma cidade',
  bairro: '',
  rua: '',
  numero: '',
  cep: '',
  hobbies: '',
  github: '',
  linguagem: '',
  biografia: ''
})

const listaCidades = ref([]);
const senhaConfirmada = ref('');

function updateInput(value) {
  if (value.id == 'confirmacao-senha') {
    senhaConfirmada.value = value.valor
  }
  signInForm[value.id] = value.valor
  console.log(signInForm[value.id]);
}

function validarEstadoCidade(id) {
  useValidation.validations[id] = true;
  console.log(useValidation.validations[id])
}

function confirmarSenha() {
  if (signInForm.senha === senhaConfirmada.value) {
    useValidation.validations.senha = true;
    useValidation.validations.confirmar_senha = true;
  } else {
    useValidation.validations.senha = false;
    useValidation.validations.confirmar_senha = false;
  }
}

async function searchCities() {
  const { data } = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${signInForm.estado}/municipios`
  )
  listaCidades.value = data
}

function validacaoSubmit() {
  for (let campo of inputInfo) {
    if (useValidation.validations[campo.id] === false) {
      console.log(campo);
      return false;
    }
  }
  useValidation.state.isLogged = true;
  useValidation.spinnerLoading();
}
</script>

<template>
 <div v-if="useValidation.state.isLoading === false" class="main-container">
    <div class="container-description">
      <h1 class="title">{{ useValidation.state.isLogged === true ? 'Obrigado por logar' : 'Cadastrar-se'}}</h1>
      <h2 class="subtitle">Serei eternamente grato pelo seu cadastro &#10084;</h2>
    </div>
    <div class="container-of-container-form">
      <div v-if="useValidation.state.isLogged === false" class="container-form">
        <form @submit.prevent="validacaoSubmit()" class="form_cadastro">
          <div class="container-inputs" v-for="(input, index) in inputInfo" :key="index">
            <div class="exception" v-if="index === 5">
              <Label :forId="inputInfo[5].id" :text="inputInfo[5].text_label" />
              <select
                name="estado"
                id="estado"
                v-model="signInForm.estado"
                @change="searchCities(); validarEstadoCidade('estado')"
              >
                <option disabled value="Selecione um estado">Selecione um estado</option>
                <option v-for="(state, index) in states" :key="index" :value="state.uf">
                  {{ state.name }}
                </option>
              </select>
            </div>

            <div class="exception" v-else-if="index === 6">
              <Label :forId="inputInfo[6].id" :text="inputInfo[6].text_label" />
              <select name="cidade" id="cidade" v-model="signInForm.cidade" @change="validarEstadoCidade('cidade')">
                <option disabled value="Selecione uma cidade">Selecione uma cidade</option>
                <option v-for="(cidade, index) in listaCidades" :key="index" :value="cidade.nome">
                  {{ cidade.nome }}
                </option>
              </select>
            </div>

            <div class="normal" v-else>
              <Label :forId="input.id" :text="input.text_label" />
              <Input
                :type="input.type"
                :placeholder="input.placeholder"
                :idInput="input.id"
                @updateInput="updateInput"
                @confirmarSenha="confirmarSenha"
              />
            </div>
          </div>

          <input type="submit" class="buttonSignIn" value="Cadastrar-se" />
        </form>
      </div>
      <div class="container-of-container-dados" v-else>
        <MostrarDados :dados="(useValidation.state.isLogged) ? signInForm : []" />
      </div>
    </div>
  </div>
  <Loading v-else />
</template>


<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
}

.container-loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 165, 247, 1) 0%,
    rgba(16, 16, 199, 1) 100%
  );
}

.title {
  margin-top: 50px;
  font-size: 2.5rem;
  color: #fdfdfd;
}

.subtitle {
  width: 700px;
  line-height: 1.5em;
  letter-spacing: 0.05em;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #fcf2f2;
}

.container-of-container-form {
  position: relative;
  display: grid;
  justify-items: center;
  bottom: 100px;
  /* background-color: #f1f1f1; */
}

.container-form {
  display: flex;
  justify-content: center;
  width: 40%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}

.form_cadastro {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 20px;
  width: 100%;
  height: 85%;
  padding: 60px 60px 60px 60px;
}

#estado,
#cidade {
  width: 300px;
  padding: 10px 20px 10px 20px;
  outline: none;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #4d4c4c;
}

.buttonSignIn {
  width: 250px;
  padding: 20px;
  margin-top: 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 165, 247, 1) 0%,
    rgba(16, 16, 199, 1) 100%
  );
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.container-of-container-dados {
  width: 40%;
}

@media (max-width: 1600px) {
  .container-form {
    width: 50%;
    margin-bottom: 30px;
  }
}
</style>