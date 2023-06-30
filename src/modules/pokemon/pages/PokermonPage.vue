<template>
  <h1>Juego</h1>
  <PokemonVue :pokemonId="13" :mostarColor="true" />
  <PokemonOptions :opciones="arreglo"/>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonVue from "../components/Pokemon.vue";
import obtenerPokemonsFacha from "../helpers/ClientePokemonAPI";

export default {
  data(){
    return{
      arreglo:[]
    }
  },
  components: {
    PokemonVue,
    PokemonOptions,
  },
  mounted() {
   this.cargaJuegoInicial()
    
  },
  methods:{
   async  cargaJuegoInicial(){
        const arregloPoke=await obtenerPokemonsFacha();
        console.log(arregloPoke)
        this.arreglo=arregloPoke
        return arregloPoke
    }
  }
};
</script>

<style scoped>
</style>