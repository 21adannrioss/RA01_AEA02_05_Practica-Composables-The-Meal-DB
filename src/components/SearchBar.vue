<script setup>
import { ref } from 'vue'

// Event que s'envia al component pare quan es fa click a "Buscar"
const emit = defineEmits(['cercar'])

// Text a l'input
const text = ref('')

// Envia el text al pare
function buscar() {
  const textNet = text.value.trim()

  // Si no hi ha res escrit, no es fa res
  if(textNet === '') {
    return
  }
  emit('cercar', textNet)
}
</script>

<template>
  <div class="cercador">
    <input v-model="text" type="text" placeholder="Cerca una recepta..." @keyup.enter="buscar"/> <!-- Amb "Enter" també es fa la cerca -->
    <button @click="buscar">Buscar</button>
  </div>
</template>

<style scoped>
.cercador {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 25px;
}

input {
  padding: 10px 15px;
  font-size: 15px;
  border: 2px solid #cfd8d6;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #2a9078;
}

button {
  padding: 10px 24px;
  background: #2a9078;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #217562;
}
</style>