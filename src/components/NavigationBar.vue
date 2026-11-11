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
  padding: 8px 18px;
  background: #2a9078;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
}

.menu a:hover {
  background: #217562;
}
</style>