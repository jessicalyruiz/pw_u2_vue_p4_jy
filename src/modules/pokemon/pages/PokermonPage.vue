<template>
<h1 v-if="!pokeCorrecto">Espere...</h1>
<div v-else>


  <h1>Juego</h1>
  <PokemonVue  :pokemonId="pokeCorrecto.id" :mostarColor="showPoke" />
  <PokemonOptions :opciones="arreglo" @pokeSelected="revisarSeleccion($event)" @mineEvent="pruebaEventos($event)"/>
  
  
  <div v-if="showPoke">


    <h1 v-if="win">Ganaste</h1>
    <h1 v-else>Perdiste</h1>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonVue from "../components/Pokemon.vue";
import obtenerPokemonsFacha from "../helpers/ClientePokemonAPI";

export default {
  data(){
    return{
      arreglo:[],
      pokeCorrecto:null,
      showPoke:false,
      win:false
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
        const indicePokeCorrecto=Math.floor(Math.random()*4)
        this.pokeCorrecto=this.arreglo[indicePokeCorrecto]
        console.log('poke correcto:')
        console.log(this.pokeCorrecto)
        return arregloPoke
    },
    revisarSeleccion(pokeSelectedHijo){
      console.log('ha llegado el seleccionado')
      this.showPoke=true
      if(pokeSelectedHijo.idPoke==this.pokeCorrecto.id){
        console.log('ganaste')
        this.win=true
      }else{
        console.log('perdiste')
        this.win=false
      }
    },
    pruebaEventos(saludo){
      console.log(saludo.saludo)
      console.log(saludo.nombre)
    }
  }
};
</script>

<style scoped>
</style>