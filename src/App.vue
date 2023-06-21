<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--
  <Componente1/>
  <Contador numero="123" titulo="Componente primero"/>
   <Contador numero="456" titulo="Componente segundo"/> -->
   <CalcuVue/>
</template>

<script>

import Componente1 from './components/Componente1.vue'
import Contador from './components/Contador.vue'
import CalcuVue from './components/CalcuVue.vue'
export default {
  name: 'App',
  components: {
    Componente1,
    Contador,
    CalcuVue
  }
}
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
