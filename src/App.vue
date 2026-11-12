<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <main class="contingut">
    <header class="header">
      <h1>Bon profit</h1>
      <NavigationBar></NavigationBar>
    </header>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  padding: 15px 25px;
  background: #ffffff;
  border-radius: 12px;
  border-bottom: 4px solid #2a9078;
}

.header h1 {
  margin: 0;
  font-size: 28px;
}
</style>