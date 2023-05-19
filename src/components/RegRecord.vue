<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, sameAs, alpha } from '@vuelidate/validators'

const state = reactive({
    name: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    workSector: '',
    category: ''
})
// corregir validaciones
const rules = {
    name: { required, alpha },
    lastName: { required, alpha },
    password: { required },
    confirmPassword: { required, confirmPassword: { sameAs: sameAs(state.password) } },
    workSector: { required },
    category: { required }
}

const v$ = useVuelidate(rules, state);
console.log(v$.value);

function submitFormReg() {
    if (state.name.value, state.lastName.value, state.password.value, state.confirmPassword.value, state.category.value && state.workSector.value === "Frios") {
        router.push('../views/StockView.vue');
        console.log("dd")
    }
}
</script>

<template>
    <div class="card">
        <h2>Registrarse</h2>
        <div class="card-body">
            <form>
                <div>
                    <label>Nombre:</label>
                    <input v-model="v$.name.$model" type="text">
                    <br>
                    <div>
                        <p v-for="(error, index) of v$.name.$errors" :key="index">{{ error.$message }}</p>
                    </div>

                    <label>Apellido:</label>
                    <input v-model="v$.lastName.$model" type="text">
                    <div>
                        <p v-for="(error, index) of v$.lastName.$errors" :key="index">{{ error.$message }}</p>
                    </div>

                    <label>Contraseña:</label>
                    <input v-model="v$.password.$model" type="password" name="password">
                    <div>
                        <p v-for="(error, index) of v$.password.$errors" :key="index">{{ error.$message }}</p>
                    </div>

                    <label>Confirmar contraseña:</label>
                    <input v-model="v$.password.$model" type="password" name="password">
                    <div>
                        <p v-for="(error, index) of v$.password.$errors" :key="index">{{ error.$message }}</p>
                    </div>
                </div>
                <div class="p-1">
                    <label>Sector de trabajo: </label>
                    <select v-model="v$.workSector.$model" class="form-select form-select-sm m-1">
                        <option value=""></option>
                        <option value="frios">Frios</option>
                        <option value="calentitos">Calentitos</option>
                        <option value="islas">Islas</option>
                    </select>
                    <div>
                        <p v-for="(error, index) of v$.workSector.$errors" :key="index">{{ error.$message }}</p>
                    </div>

                    <label>Categoria:</label>
                    <select v-model="v$.category.$model" class="form-select form-select-sm  m-1"
                        aria-label="Default select example">
                        <option selected></option>
                        <option value="cocinero">Cocinero</option>
                        <option value="ayudante">Ayudante</option>
                    </select>
                    <div>
                        <p v-for="(error, index) of v$.category.$errors" :key="index">{{ error.$message }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <input @click="submitFormReg()" type="submit" class="btn btn-outline-dark" value="Registrarse">
                </div>
            </form>
        </div>

    </div>
</template>

<style scoped>
p {
    margin-top: 1%;
    font-size: 10px;
    color: red;
}

input {
    margin: 1px;
}
</style>
