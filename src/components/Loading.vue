<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
    <div class="loader"></div>
</template>

<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
}

.loader::after {
    content: "";
    width: 75px;
    height: 75px;
    border: 15px solid #000;
    border-top-color: #009578;
    border-radius: 50%;
    animation: loading 0.75s ease infinite;
    transition: opacity 0.75s, visibility 075s;
}

@keyframes loading {
    from { transform: rotate(0turn) }
    to { transform: rotate(1turn); }
}
</style>
