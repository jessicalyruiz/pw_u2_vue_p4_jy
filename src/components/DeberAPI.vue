<template>
  <div class="fondo">
    <!-- <img src="../assets/cas.jpg" alt="" class="bg">-->

    <div class="container">
      <div class="juego">
        <h1>Casino</h1>
        <div class="pantallas">
          <img :src="src1" alt="no se muestra" />
          <img :src="src2" alt="no se muestra" />
          <img :src="src3" alt="no se muestra" />
        </div>
        <div class="respuestas">
          <h4>{{ resp1 }}</h4>
          <h4>{{ resp2 }}</h4>
          <h4>{{ resp3 }}</h4>
        </div>
        <button v-on:click="lanzar">Lanzar</button>
        <h3>{{ msj }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeberAPI",
  data() {
    return {
      src1: "",
      src2: "",
      src3: "",
      resp1: "",
      resp2: "",
      resp3: "",
      lanzamientos: 0,
      puntaje: 0,
      msj: "",
    };
  },
  methods: {
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    async lanzar() {
      console.log("lanzar");
      this.lanzamientos += 1;
      if (this.lanzamientos == 1) {
        const { answer, image } = await this.consumirAPI();
        this.src1 = image;
        this.resp1 = answer;
      } else if (this.lanzamientos == 2) {
        const { answer, image } = await this.consumirAPI();
        this.src2 = image;
        this.resp2 = answer;
      } else if (this.lanzamientos == 3) {
        const { answer, image } = await this.consumirAPI();
        this.src3 = image;
        this.resp3 = answer;

         if (this.resp1 == "yes" && this.resp2 == "yes" && this.resp3 == "yes") {
        this.msj = "Ganaste $10000";
      } else if (
        (this.resp1 == "yes" && this.resp2 == "yes") ||
        (this.resp1 == "yes" && this.resp3 == "yes") ||
        (this.resp2 == "yes" && this.resp3 == "yes")
      ) {
        this.msj = "Ganaste $100";
      } else {
        this.msj = "Perdiste";
      }
      }
     
    },
  },
};
</script>

<style scoped>
.container {
  display: center;
  justify-content: center;
  align-items: center;
}
.bg {
}
</style>