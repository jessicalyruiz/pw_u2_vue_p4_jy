<template>
  <div class="container">
    <h1>Quien es este Pokemon?</h1>
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{
            img:'',
        }
    },
    methods:{
        async consumirAPI(){
            return await fetch('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg')
        }
    }

}
</script>

<style>

</style>