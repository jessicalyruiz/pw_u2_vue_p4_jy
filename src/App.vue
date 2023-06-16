<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hello" nombre="Jessicaly"/>
  <HelloWorld msg="Hello Jessicaly2"/>
  <Componente1/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Componente1 from './components/Componente1.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Componente1,
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
