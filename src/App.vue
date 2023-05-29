<script setup>

</script>

<template>
  <div class="d-flex justify-content-center">
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/frios">Frios</router-link> |
      <router-link to="/calentitos">Calentitos</router-link> |
      <router-link to="/islas">Islas</router-link>
    </p>
  </div>
  <div class="d-flex justify-content-center">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>