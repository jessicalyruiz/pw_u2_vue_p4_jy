<template>
  <div class="container">
    <!--<div class="title">
    <h1>Quien es este Pokemon?</h1>
    </div>-->
    <div class="contenedorImg">
      <img :src="img" alt="No se puede mostrar" class="negroPoke" />
      <img
        v-if="mostarColor"
        :src="img"
        alt="No se puede mostrar"
        class="colorPoke"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId:{
        type:Number,
        required:true
    },
    mostarColor:{
        type:Boolean,
        required:true
    } 
  },
  data() {
    return {
      id: 50,
      img: '',
      
    };
  },
  computed: {
    img() {
     return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  /* align-content: center;*/
  justify-content: center;
}
.negroPoke {
  filter: brightness(0);
}
img {
  position: absolute;
  height: 200px;
  right: 42%;
}
.contenedorImg {
  height: 200px;
}
.title{
    height: 100px;
}
</style>