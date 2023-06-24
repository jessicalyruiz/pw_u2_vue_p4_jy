<template>
<h1>Juego</h1>
<PokemonVue/>
  <PokemonOptionsVue/>
</template>

<script>
import PokemonVue from '../components/Pokemon.vue'
import PokemonOptions from '../components/PokemonOptions.vue'
export default {

components:{
    PokemonVue,
    PokemonOptions,
}
}
</script>

<style>

</style>