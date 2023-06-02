<script setup>
import NewProducto from '../components/NewProducto.vue'
import TableProducts from '../components/TableProducts.vue'

const arrayProducts = [];


function drawTable(newProduct) {
   console.log("hola");
   console.log(arrayProducts);
   console.log(newProduct);

   if (newProduct == "" || newProduct != "null") {
      arrayProducts.push( newProduct );
    }
}

</script>

<template>
   <div>
      <h3>Stock fríos</h3>
      <NewProducto @sendProduct="drawTable" />
      <TableProducts :id="'tableProduct'" :listaProductos="arrayProducts" />
   </div>
</template>

<style scoped></style> 