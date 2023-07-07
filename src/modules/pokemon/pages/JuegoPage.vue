<template>
  <h1>Juego</h1> 
  <p>Pero antes de presentarte el juego, te dejo que adivines tu destino con la siguiente caracola mágica</p>
  <p>Te atreves hacerle una pregunta?</p>
  <PreguntaVue/>
</template>

<script>
import PreguntaVue from '@/components/Pregunta.vue'

export default {

components:{
    PreguntaVue
}
}
</script>

<style>

</style>