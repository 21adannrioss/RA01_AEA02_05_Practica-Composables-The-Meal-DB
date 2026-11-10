import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Receptes from '@/views/Recipes.vue'
import DetallReceptes from '@/views/RecipeDetail.vue'
import noTrobat from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Pàgina d'inici
    {path: '/', name: 'inici', component: Home},

    // Llistat de receptes
    {path: '/receptes', name: 'receptes', component: Receptes},

    // Detall d'una recepta
    {path: '/receptes/:id', name: 'detall-recepta', component: DetallReceptes},

    // Qualsevol altra url que no existeixi mostra la pàgina de no trobat
    {path: '/:pathMatch(.*)*', name: 'no-trobat', component: noTrobat}
  ]
})
export default router