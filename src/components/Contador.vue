<template>
  <h3>Contador</h3>
  <h4>{{titulo || "valaor por defecto" }}</h4>
  <h4>{{evaluarTitulo }}</h4>

  <p>{{num}}</p>
  <button @click="aumentar"> Aumentar</button>

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
        titulo:String,
        inicio:{
          type: Number,
          required: false,
          default:101,
          validator(value){
            return value >100
          }
          }
        
  },
  data(){
    return{
        num:this.inicio,
        tituloComp:'',
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
    },
    evaluarTitulo(){
        return this.titulo || "valaor por defecto"
    }
  }
};
</script>

<style scoped>
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