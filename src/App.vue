<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="capcalera">
    <span class="logo">FoodExplorer</span>
    <nav>
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/receptes">Receptes</RouterLink>
    </nav>
  </header>

  <main class="contingut">
    <!-- Vista que correspon a la url -->
    <RouterView/>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #fdf8ee;
  color: #2b2b2b;
}

.capcalera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 30px;
  background: #2e6b4f;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

nav a {
  margin-left: 20px;
  color: #d6ecdf;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #ffffff;
}

/* Enllaç de la pàgina actual */
nav a.router-link-active {
  color: #ffd166;
  border-bottom: 2px solid #ffd166;
}

.contingut {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
}
</style>