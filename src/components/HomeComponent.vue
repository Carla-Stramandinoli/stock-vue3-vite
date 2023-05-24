<script setup>
import LogForm from '../components/LogForm.vue';
import RegRecord from '../components/RegRecord.vue'

function showModalReg(){
    
}
</script>

<template>
    <div class="d-flex">
        <button @click="showModalReg()">Registrarse</button>
        <reg-record />
        <button>Ingresar</button>
        <log-form />
    </div>
</template>

<style scoped></style>