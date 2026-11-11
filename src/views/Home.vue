<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch.js'
import SearchBar from '@/components/SearchBar.vue'
import MealCard from '@/components/MealCard.vue'

// Text que s'està cercant i que s'envia a l'API, per defecte es cerca "Chicken" per mostrar alguna recepta a l'inici
const textCerca = ref('Chicken')

// La url canvia cada vegada que canvia el text de cerca
const url = computed(() => {
  return 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + encodeURIComponent(textCerca.value)
})

// Fem servir el composable per llegir les receptes
const {dades, error, carregant, carregarDades} = useFetch(url)

// Llista de plats que s'ha de mostrar. Si no hi ha dades, es retorna un array buit
const plats = computed(() => {
  if(dades.value && dades.value.meals) return dades.value.meals
  return []
})

// S'executa quan el SearchBar envia el text amb l'emit
function cercarReceptes(text) {
  textCerca.value = text
  // Es torna a fer la petició amb el nou text
  carregarDades()
}
</script>

<template>
  <section>
    <SearchBar @cercar="cercarReceptes"/>

    <p v-if="carregant" class="missatge">Carregant...</p>
    <p v-else-if="error" class="missatge missatge-error">Error: {{ error }}</p>
    <p v-else-if="plats.length === 0" class="missatge">No s'ha trobat cap recepta per a "{{ textCerca }}".</p>

    <div v-else class="llista">
      <MealCard v-for="plat in plats" :key="plat.idMeal" :meal="plat"/>
    </div>
  </section>
</template>

<style scoped>
.llista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
</style>