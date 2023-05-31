<script setup>
import { defineProps } from 'vue';

const listaProduct = defineProps({
    listaProductos: Object,
})
</script>

<template>
    <div>
        <table v-bind:id="(id)" class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(prod, index) in listaProduct.listaProductos' :key='index'>
                    <td>{{ prod.nameProduct }}</td>
                    <td>{{ prod.stockInitial }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>