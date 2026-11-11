<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '@/composables/useFetch.js'

// S'agafa l'identificador del plat de l'URL
const ruta = useRoute()

// La url depèn de l'identificador del plat
const url = computed(() => {
  return 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + ruta.params.idMeal
})

const {dades, error, carregant, carregarDades} = useFetch(url)

// Si l'identificador de l'URL canvia, es torna a fer la petició amb el plat nou
watch(() => ruta.params.idMeal, (nouId) => {
    // Si no hi ha id, significa que no hi ha cap plat seleccionat i no es fa res
    if(nouId) {
      carregarDades()
    }
  }
)

// Agafa el primer plat de la resposta de l'API. Si no hi ha cap plat, retorna null
const plat = computed(() => {
  if(dades.value && dades.value.meals) return dades.value.meals[0]
  return null
})

// L'API guarda els ingredients i les quantitats en camps separats, per això es crea una llista amb tots els ingredients i les seves quantitats
const ingredients = computed(() => {
  const llista = []
  if(!plat.value) return llista

  for(let i = 1; i <= 20; i++) {
    const nom = plat.value['strIngredient' + i]
    const quantitat = plat.value['strMeasure' + i]

    // Només s'afegeixen els ingredients que tenen text
    if(nom && nom.trim() !== '') {
      llista.push({ nom: nom, quantitat: quantitat })
    }
  }

  return llista
})
</script>

<template>
  <section>
    <p v-if="carregant" class="missatge">Carregant...</p>
    <p v-else-if="error" class="missatge missatge-error">Error: {{ error }}</p>
    <p v-else-if="!plat" class="missatge">Aquesta recepta no existeix.</p>

    <div v-else>
      <h2>{{ plat.strMeal }}</h2>

      <div class="detall">
        <img :src="plat.strMealThumb" :alt="plat.strMeal" />

        <div class="detall-text">
          <h3>Ingredients</h3>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient.nom">
              {{ ingredient.nom }}: {{ ingredient.quantitat }}
            </li>
          </ul>

          <h3>Instruccions</h3>
          <p class="instruccions">{{ plat.strInstructions }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detall {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}

.detall img {
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
}

.detall-text {
  flex: 1;
  min-width: 250px;
}

.detall-text h3 {
  margin-top: 0;
}

/* Respecta els salts de línia del text de les instruccions */
.instruccions {
  white-space: pre-line;
  line-height: 1.5;
}
</style>