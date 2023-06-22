<template>
  <div class="caracola">
    <h1>Caracola Magica</h1>
    <img src="https://via.placeholder.com/250" alt="No se muestra" />
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>recuerda terminar con un enter</p>

    <div>
        <h2>{{pregunta}}</h2>
        <h1>{{respuesta}}</h1>
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
    };
  },
  methods: {},
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
}
</style>