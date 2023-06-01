<script setup>
import { reactive } from 'vue'
import TableProducts from '../components/TableProducts.vue'

const newProduct = reactive({
    nameProduct: '',
    stockInitial: ''
})

const listProduct = [];

const emits = defineEmits(['sendProduct'])

function uploadNewProduct() {
    if (listProduct == "" || listProduct != "null") {
        listProduct.push(
            {
                nameProduct: newProduct.nameProduct, stockInitial: newProduct.stockInitial
            }
        );
    }
    console.log(listProduct);
    if (newProduct.nameProduct != '' && newProduct.stockInitial != '') {
        emits('sendProduct');
    }
    document.querySelector(".delete-form-prod").reset();
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
            <form class="delete-form-prod">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre del producto:</label>
                    <input v-model="newProduct.nameProduct" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Stock inicial:</label>
                    <input v-model="newProduct.stockInitial" type="number" class="form-control">
                </div>
            </form>
            <div class="mt-3">
                <button @click="uploadNewProduct()" class="btn btn-secondary" type="submit">
                    Agregar
                </button>
            </div>
        </div>
    </div>

    <div>
        <TableProducts :id="'tableProduct'" :listaProductos="listProduct" />
    </div>
</template>

<style scoped></style>