<script setup>
import NewProducto from '../components/NewProducto.vue'
import TableProducts from '../components/TableProducts.vue'
import { ref } from 'vue'

const tableData = ref([]);

const loadNewProduct = (data) => {
   console.log(tableData);
   tableData.value.push(data);
}
</script>

<template>
   <div>
      <h3>Stock fríos</h3>
      <NewProducto @sendData="loadNewProduct" />
      <TableProducts :data="tableData" />
   </div>
</template>

<style scoped></style> 