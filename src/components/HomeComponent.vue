<script setup>
import LogForm from '../components/LogForm.vue'
import RegRecord from '../components/RegRecord.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['show']);

function showModalReg(id) {
    emit("show");
    window.$("#" + id).modal('show');
}

</script>

<template>
    <div class="d-flex flex-column">
        <button class="m-1" @click="showModalReg('registroForm')">Registrarse </button>
        <reg-record :id="'registroForm'" />

        <button class="m-1" @click="showModalReg('logForm')">Ingresar</button>
        <log-form :id="'logForm'" />
    </div>
</template>

<style scoped>

</style>