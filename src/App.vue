<script setup>

</script>

<template>
  <ul class="nav flex-column align-items-start">
    <li class="nav-item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/frios" class="dropdown-item">Frios</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/calentitos" class="dropdown-item">Calentitos</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/islas" class="dropdown-item">Islas</router-link>
    </li>
  </ul>
  <div class="d-flex justify-content-center">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

