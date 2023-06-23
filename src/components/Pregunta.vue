<template>
  <div class="caracola">
    <h1>Caracola Mágica</h1>
    <div class=imagen></div>
    <img :src="img" alt="No se muestra" />
    
   <div class="contenedor">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>recuerda terminar con un ?</p>

    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Pregunta",
  props: {},
  data() {
    return {
      pregunta: "",
      respuesta: "",
      img:'https://i1.ytimg.com/vi/Tb_DY0DVCn4/mqdefault.jpg',
    };
  },
  methods: {
    async consumirAPI(){
      console.log(await fetch('https://yesno.wtf/api').then(r=>r.json()))
      return await fetch('https://yesno.wtf/api').then(r=>r.json())
     
    }

  },
  watch: {
    async pregunta(value, oldValue){
      console.log('value: '+value)
      console.log('oldValue: '+oldValue)
      if(value.includes('?')){
        console.log('consumo el  API')
       const {answer, image}= await this.consumirAPI()
       this.respuesta=answer
       this.img=image
       console.log(this.respuesta)

      }
    }
  },
};
</script>

<style>
@font-face {
  font-family: "charlinda";
  src: url("../assets/fonts/charlinda.ttf");
}
.caracola {
  display: grid;
  align-items: center;
  justify-content: center;
}
img, imagen{

  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}
.contenedor{
position: relative;
}
.imagen{
  background-color: rgba(0,0 ,0, 0.2);
}
input{
  width: 250px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
}
p,h1,h2{
  color: white;
}

p{
  font-size: 20px;
  margin-top: 0px;
}
</style>