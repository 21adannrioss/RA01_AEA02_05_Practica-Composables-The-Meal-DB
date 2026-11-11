<script setup>
import { RouterLink } from 'vue-router'

// Es rep el plat sencer
const props = defineProps({
  meal: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="targeta">
    <img :src="props.meal.strMealThumb" :alt="props.meal.strMeal"/>

    <div class="targeta-text">
      <h3>{{ props.meal.strMeal }}</h3>
      <!-- Origen i categoria del plat -->
      <p>{{ props.meal.strArea }} - {{ props.meal.strCategory }}</p>

      <!-- Enllaç al detall del plat per l'URL -->
      <RouterLink :to="{name: 'Meal', params: {idMeal: props.meal.idMeal}}">
        Recepta
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.targeta {
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.targeta img {
  width: 100%;
  border-radius: 6px;
  display: block;
}

.targeta-text h3 {
  margin: 10px 0 8px 0;
  font-size: 16px;
}

.targeta-text p {
  margin: 0 0 12px 0;
  font-size: 14px;
}

.targeta-text a {
  color: #5b3fd1;
}
</style>