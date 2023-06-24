<template>
  <!--
  <Componente1/>
  <Contador v-bind:inicio="3*2" titulo="Componente primero"/>
   <Contador  titulo="Componente segundo"/> 
   <CalcuVue/> 
<Pregunta/>-->

<DeberAPI/>

</template>

<script>
import Componente1 from "./components/Componente1.vue";
import Contador from "./components/Contador.vue";
import CalcuVue from "./components/CalcuVue.vue";
import Pregunta from "./components/Pregunta.vue";

import DeberAPI from "./components/DeberAPI.vue";
export default {
  name: "App",
  components: {
    Componente1,
    Contador,
    CalcuVue,
    Pregunta,
    DeberAPI,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
