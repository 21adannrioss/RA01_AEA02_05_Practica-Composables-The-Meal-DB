<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <h1>Pàgina no trobada</h1>
    <p>Comprova la url o torna a l'<RouterLink to="/">inici</RouterLink>.</p>
  </section>
</template>

<style scoped>
h1 {
  color: #2e6b4f;
}

a {
  color: #e07a2f;
  font-weight: bold;
}
</style>