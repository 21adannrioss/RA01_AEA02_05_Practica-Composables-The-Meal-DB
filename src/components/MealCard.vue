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
      <RouterLink :to="{name: 'Meal', params: {idMeal: props.meal.idMeal}}">Recepta</RouterLink>
    </div>
  </article>
</template>

<style scoped>
.targeta {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.targeta:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.targeta img {
  width: 100%;
  display: block;
}

.targeta-text {
  padding: 15px;
}

.targeta-text h3 {
  margin: 0 0 8px 0;
  font-size: 17px;
}

.targeta-text p {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #777777;
}

.targeta-text a {
  display: inline-block;
  padding: 8px 18px;
  background: #2a9078;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  border-radius: 20px;
  transition: background 0.2s;
}

.targeta-text a:hover {
  background: #217562;
}
</style>