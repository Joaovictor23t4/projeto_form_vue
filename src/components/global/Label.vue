<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String
    },
    forId: {
        type: String
    }
});

console.log(props);
</script>

<template>
    <label :for="props.forId">{{ props.text }}</label>
</template>

<style scoped>
label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #3a3838;
}
</style>