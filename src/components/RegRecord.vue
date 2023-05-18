<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const state = reactive({
    name: '',
    lastName: '',
    password: '',
    workSector: '',
    category: ''
})

const rules = {
    name: { required },
    lastName: { required }
}

const v$ = useVuelidate(rules, state);
console.log(v$.value);

</script>

<template>
    <div class="card">
        <h2>Registrarse</h2>
        <div class="card-body">
            <form class="p-1">
                <div>
                    <label>Nombre:</label>
                    <input v-model="v$.name.$model" type="text">
                    <br>
                    <div>
                        <p v-for="(error, index) of v$.name.$errors" :key="index">{{ error.$message }}</p>
                    </div>
                </div>
                <div>
                    <label>Apellido:</label>
                    <input v-model="v$.lastName.$model" type="text">
                    <div>
                        <h6 v-for="(error, index) of v$.lastName.$errors" :key="index">{{ error.$message }}</h6>
                    </div>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input v-model="password" type="password" name="password">
                </div>
                <div class="p-1">
                    <label>Sector de trabajo: </label>
                    <select v-model="workSector" class="form-select form-select-sm m-1">
                        <option value=""></option>
                        <option value="frios">Frios</option>
                        <option value="calentitos">Calentitos</option>
                        <option value="islas">Islas</option>
                    </select>

                    <label>Categoria:</label>
                    <select v-model="category" class="form-select form-select-sm  m-1" aria-label="Default select example">
                        <option selected></option>
                        <option value="cocinero">Cocinero</option>
                        <option value="ayudante">Ayudante</option>
                    </select>
                </div>
                <div class="d-flex justify-content-end">
                    <input type="submit" class="btn btn-outline-dark" value="Registrarse">
                </div>
            </form>
        </div>

    </div>
</template>

<style scoped>
p {
    margin-top: 1px;
    font-size: 10px;
    color: red;
}
</style>
