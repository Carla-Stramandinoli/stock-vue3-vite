<script setup>

</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">Sectores</a>
          <ul class="dropdown-menu">
            <li> <router-link to="/frios" class="dropdown-item">Frios</router-link>
            </li>
            <li> <router-link to="/calentitos" class="dropdown-item">Calentitos</router-link>
            </li>
            <li> <router-link to="/islas" class="dropdown-item">Islas</router-link>
            </li>
          </ul>
        </li>
      </ul>
  </nav>
  <div class="d-flex justify-content-center">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

