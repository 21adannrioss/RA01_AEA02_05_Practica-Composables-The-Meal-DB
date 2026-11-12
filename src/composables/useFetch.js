import { ref, onMounted, toValue } from 'vue'

// Composable per llegir dades d'una API

// Es rep la url i pot ser un ref, una computed o un text normal
export function useFetch(url) {
  // Dades que retorna l'API
  const dades = ref(null)

  const error = ref(null)

  const carregant = ref(true)

  // Funció que fa la petició a l'API
  const carregarDades = async () => {
    carregant.value = true
    error.value = null

    try{
      const resposta = await fetch(toValue(url))

      // Si la resposta no és correcta, es llança un error
      if(!resposta.ok) {
        throw new Error('Error en la petició: ' + resposta.status)
      }
      dades.value = await resposta.json()
    }catch(err) {
      error.value = err.message
    }finally {
      // Si o si, quan acaba la petició, es deixa de carregar
      carregant.value = false
    }
  }

  // Es fa la petició quan es carrega el component
  onMounted(carregarDades)

  // Retorna les dades i la funció per poder tornar a carregar
  return {dades, error, carregant, carregarDades}
}