<script setup>
import NewProducto from '../components/NewProducto.vue'
import { defineProps } from 'vue';

const products = defineProps({
    nameProduct: String,
    stockInitial: Number
})

function drawTable() {
   console.log("hola");
}

</script>

<template>
   <div>
      <h3>Stock fríos</h3>
      <NewProducto @sendProduct="drawTable" />
   </div>
</template>

<style scoped></style> 