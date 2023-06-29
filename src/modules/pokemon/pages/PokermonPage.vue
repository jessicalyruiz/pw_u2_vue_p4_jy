<template>
<h1>Juego</h1>
<PokemonVue :pokemonId="111" :mostarColor="true"/>
  <PokemonOptions/>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonVue from '../components/Pokemon.vue'

export default {

components:{
    PokemonVue,
    PokemonOptions,
}
}
</script>

<style scoped>

</style>