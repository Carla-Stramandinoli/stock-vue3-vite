<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: String
})
</script>

<template>
    <div class="modal" v-bind:id="(props.id)">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ingresar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div>
                            <label>Nombre:</label>
                            <input type="text">
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input type="password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-outline-dark m-1" type="submit">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    margin: 1px;
}
</style>