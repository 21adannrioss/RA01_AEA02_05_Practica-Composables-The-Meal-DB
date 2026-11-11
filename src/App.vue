<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <main class="contingut">
    <header class="capcalera">
      <h1>Bon profit</h1>
      <NavigationBar></NavigationBar>
    </header>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.capcalera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #2a9078;
}

.capcalera h1 {
  margin: 0;
}
</style>