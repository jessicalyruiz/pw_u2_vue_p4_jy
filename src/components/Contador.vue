<template>
  <h3>Contador</h3>
  <h4>{{titulo}}</h4>
  <p>10</p>
  Numero con props: {{numero}}
  <p>{{num}}</p>
  <button v-on:click="aumentar"> Aumentar</button>

<button v-on:click="disminuir"> Disminuir</button>
  <p>{{num}} <sup>2</sup>={{num*num}}</p>
   <p>{{num}} <sup>2</sup>={{obtenercuadradoComputed}}</p>
    <p>{{num}} <sup>2</sup>={{obtenercuadradoComputed}}</p>
    <p>{{num}} <sup>2</sup>={{obtenercuadradoComputed}}</p>


</template>

<script>
export default {
  //name: "Contador",
  props:{
        numero:Number,
        titulo:String,
  },
  data(){
    return{
        num:5,
    }
  },
  methods:{
    aumentar(){
        this.num+=1
    },
        disminuir(){
        this.num-=1
    },
    obtenercuadrado(){
        console.log('entro al metodo cuadrado')
        return this.num*this.num
    }
  },
  computed:{
    obtenercuadradoComputed(){
        console.log('entro al metodo cuadrado Computed')
        return this.num*this.num
    }
  }
};
</script>

<style>
button{
    margin: 0 6px;
    border-radius: 5px;
    background-color: #64b687;
    box-shadow: 5px 5px 5px 1px;
    padding: 15px 20px;
    border: 1px solid white;
    cursor: pointer;

}

button:hover{
    background-color: #5aa67b;
}
h4{
    color:#5aa67b ;
}

</style>