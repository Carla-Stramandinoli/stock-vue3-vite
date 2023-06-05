<script setup>
import { ref } from 'vue'

const nameProduct = ref('');
const stockInitial = ref(0);

const emit = defineEmits(['sendData']);

function uploadNewProduct() {
    const data = {nameProduct: nameProduct.value, stockInitial: stockInitial.value};
    console.log(data);
    emit('sendData', data)
    document.querySelector('.delete-form-prod').reset();
}
</script>

<template>
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
        aria-controls="offcanvasExample">
        +
    </a>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Nuevo producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <form @submit.prevent="uploadNewProduct" class="delete-form-prod">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre del producto:</label>
                    <input v-model="nameProduct" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Stock inicial:</label>
                    <input v-model="stockInitial" type="number" class="form-control">
                </div>
           
            <div class="mt-3">
                <button class="btn btn-secondary" type="submit">
                    Agregar
                </button>
            </div>
        </form>
        </div>
    </div>
</template>

<style scoped></style>