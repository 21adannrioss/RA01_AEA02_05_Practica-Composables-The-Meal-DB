<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="menu">
    <RouterLink :to="{name: 'Home'}">Home</RouterLink>
  </nav>
</template>

<style scoped>
.menu a {
  display: inline-block;
  padding: 10px 22px;
  background: #2a9078;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  transition: background 0.2s;
}

.menu a:hover {
  background: #217562;
}
</style>