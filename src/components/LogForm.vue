<script setup>

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Ingresar</h3>
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
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark m-1" type="submit">Ingresar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
input {
    margin: 1px;
}
</style>