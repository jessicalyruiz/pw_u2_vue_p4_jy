<template>
  <h1>Instrucciones</h1>
  <div class="container">

  
  <div class="inst">

  
  <ul>
    <li>El juego consiste en adivinar un Pokémon específico entre cuatro opciones.</li>
    <li>Cada opción de Pokémon se representa con un botón.</li>
    <img src="@/assets/btn.jpg" alt="">
    <li>
      
Solo uno de los cuatro botones es el correcto y corresponde al Pokémon objetivo.</li>
<li>tendras una pista del pokemon</li>
  </ul>
  <img src="@/assets/pista.jpg" alt="">
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.inst{
  align-items: center;
}
img{
  padding: 20px;
  
}
li{
  margin-left: 15%;
}
</style>