<template>
<div class="contenedorOpciones">


  <!--<h1>Opciones pokemon</h1>-->
  <ul>
    <li v-on:click="jugar">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  </div>
</template>

<script>
export default {

  data(){
    return{
      poke1:'',
      poke2:'',
      poke3:'',
      poke4:'',
      pokes:[]
    }
  },
  methods:{
    generarRandom(max, min){
        return Math.floor(Math.random*(max*min-1)+min)
    },
    generarIdPkemons(){
      for(let i=0;i<4;i++){
            this.pokes[i]=this.generarRandom(0,600)
      }
      console.log(this.pokes)
    },
    jugar(){

    }
  }
}
</script>

<style scope>
ul{
  list-style: none;
}
li{
  border: 1px solid pink;
  border-radius: 20px;
  background-color: rgb(250, 238, 240);
  margin-top: 10px;
  width: 200px;
  cursor: pointer;
}
li:hover{
  background-color: rgb(188, 245, 245);
}

.contenedorOpciones{
  display: flex;
  justify-content: center;
}
</style>