<template>
  <h1 v-if="!pokeCorrecto">Espere...</h1>
  <div v-else>
    <h1>Juego</h1>
    <div class="title">
      <h3>Intentos: {{ intentos }}</h3>
      <h3>Puntaje: {{ puntaje }}</h3>
    </div>
    <PokemonVue :pokemonId="pokeCorrecto.id" :mostarColor="showPoke" />
    <PokemonOptions
      :opciones="arreglo"
      @pokeSelected="revisarSeleccion($event)"
      @mineEvent="pruebaEventos($event)"
      :encerar="setear"
    />

    <div v-if="showPoke">
      <h1 v-if="win">Ganaste</h1>
      <h1 v-if="noWin">Perdiste</h1>
    </div>
    <div v-if="mostrarNuevo">
      <button v-on:click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonVue from "../components/Pokemon.vue";
import obtenerPokemonsFacha from "../helpers/ClientePokemonAPI";

export default {
  data() {
    return {
      arreglo: [],
      pokeCorrecto: null,
      showPoke: false,
      win: false,
      noWin:false,
      intentos: null,
      puntaje: 0,
      mostrarNuevo:false,
      setear:false
    };
  },
  components: {
    PokemonVue,
    PokemonOptions,
  },
  mounted() {
    this.cargaJuegoInicial();
  },
  methods: {
    async cargaJuegoInicial() {
      this.setear=false
      console.log('setear carga: '+this.setear)
      const arregloPoke = await obtenerPokemonsFacha();
      console.log(arregloPoke);
      this.arreglo = arregloPoke;
      const indicePokeCorrecto = Math.floor(Math.random() * 4);
      this.pokeCorrecto = this.arreglo[indicePokeCorrecto];
      console.log("poke correcto:");
      console.log(this.pokeCorrecto);
      return arregloPoke;
    },
    revisarSeleccion(pokeSelectedHijo) {
      console.log('setear: '+this.setear)
      this.setear=false
      console.log("ha llegado el seleccionado");
      
      this.intentos = pokeSelectedHijo.try;
      if (this.intentos == 1) {
        if (pokeSelectedHijo.idPoke == this.pokeCorrecto.id) {
          this.showPoke = true;
          console.log("ganaste");
          this.win = true;
          this.noWin=false
          this.puntaje=pokeSelectedHijo.points+5
          this.mostrarNuevo=true
        } else {
          console.log("perdiste");
          this.win = false;
          
        }
      }else if (this.intentos == 2) {
        if (pokeSelectedHijo.idPoke == this.pokeCorrecto.id) {
          this.showPoke = true;
          console.log("ganaste");
          this.win = true;
          this.noWin=false
          this.puntaje=pokeSelectedHijo.points+2
          this.mostrarNuevo=true
        } else {
          console.log("perdiste");
          this.win = false;
          
        }
      }else if (this.intentos >= 3) {
        this.mostrarNuevo=true
        if (pokeSelectedHijo.idPoke == this.pokeCorrecto.id) {
          this.showPoke = true;
          console.log("ganaste");
          this.win = true;
          this.noWin=false
          this.puntaje=pokeSelectedHijo.points+1
          
        } else {
          console.log("perdiste");
          this.win = false;
          this.noWin=true
          
        }
      }
    },
    pruebaEventos(saludo) {
      console.log(saludo.saludo);
      console.log(saludo.nombre);
    },
    newGame(){
      this.arreglo= [],
      this.cargaJuegoInicial()
      this.showPoke= false,
      this.win= false,
      this.noWin=false,
      this.intentos= 0,
      this.puntaje=0,
      this.mostrarNuevo=false
      this.setear=true
    }
  },
};
</script>

<style scoped>

button{
  background-color: pink;
  padding: 10px 25px;
}
</style>