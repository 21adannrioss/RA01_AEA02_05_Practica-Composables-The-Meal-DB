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
  gap: 15px;
  margin-bottom: 20px;
}

input {
  padding: 5px 8px;
  border: 1px solid #888;
  border-radius: 4px;
}

button {
  padding: 8px 20px;
  background: #2a9078;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #217562;
}
</style>