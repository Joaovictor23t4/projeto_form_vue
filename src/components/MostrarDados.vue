<script setup>
import { defineProps} from 'vue';

const props = defineProps({
    dados: {
        type: Array,
        requirement: true
    }
});

console.log(props.dados);


</script>

<template>
    <div class="container-dados">
        <p><strong>Nome:</strong> {{ props.dados.nome }}</p>
        <p><strong>Email:</strong> {{ props.dados.email }}</p>
        <p><strong>Senha:</strong> {{ props.dados.senha }}</p>
        <p><strong>Data de Nascimento:</strong> {{ props.dados.data_nascimento }}</p>
        <p><strong>Estado:</strong> {{ props.dados.estado }}</p>
        <p><strong>Cidade:</strong> {{ props.dados.cidade }}</p>
        <p><strong>Bairro:</strong> {{ props.dados.bairro }}</p>
        <p><strong>Rua:</strong> {{ props.dados.rua }}</p>
        <p><strong>Número:</strong> {{ props.dados.numero }}</p>
        <p><strong>CEP:</strong> {{ props.dados.cep }}</p>
        <p><strong>Hobbies:</strong> {{ props.dados.hobbies }}</p>
        <p><strong>Github:</strong> {{ props.dados.github }}</p>
        <p><strong>Linguagem de Programação:</strong> {{ props.dados.linguagem }}</p>
        <p><strong>Biografia:</strong> {{ props.dados.biografia }}</p>
    </div>
</template>

<style scoped>
.container-dados {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}

p {
    margin-bottom: 10px;
}
</style>