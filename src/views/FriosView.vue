<script setup>
import NewProducto from '../components/NewProducto.vue';

function drawTable(){
   console.log("hola");
}
</script>

<template>
   <div >
      <h3>Vista de stock frios</h3>
      <NewProducto  @sendProduct="drawTable"/>
   </div>
</template>

<style scoped></style>