<script setup>

const props = defineProps({
    data: Array
})
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

let date = new Date;
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

</script>

<template>
    <div>
        <table  v-bind:id="(id)" class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Entra</th>
                    <th scope="col">Sale</th>
                    <th scope="col">Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(prod, index) of props.data" :key="index">
                    <td>{{ prod.nameProduct }}</td>
                    <td >{{ formatDate(date) }}</td>
                    <td><input type="number" id=""></td>
                    <td><input type="number" id=""></td>
                    <td>{{ prod.stockInitial }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
input {
  width: 100px;
}
</style>