<script setup>
</script>

<template>
  <div class="main-container">
    <div class="container-description">
      <h1>Cadastrar-se</h1>
    </div>
    <div class="container-main-form">
      <div class="container-form">
        <form action="" class="form_cadastro">
          <label for="">Your name</label>
          <input type="text" placeholder="Escreva seu nome" id="input-name">
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #fefefe;
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

.container-main-form {
  display: flex;
  height: 55%;
  justify-content: center;
  position: relative;
  bottom: 100px;
}

.container-form {
  display: flex;
  justify-content: center;
  width: 80%;
  background: #fff;
}

.form_cadastro {
  width: 100%;
  padding: 60px 80px 60px 80px;
}
</style>