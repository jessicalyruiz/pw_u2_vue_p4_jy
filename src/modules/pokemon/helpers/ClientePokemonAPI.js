



  const obtenerPokemons=async()=>{
    //retornar el array de pokemons
   /* console.log('aleatorio js externo')
    console.log(obtenerAleatorio(0,3))
    console.log(obtenerVectorNumerico())
    const pok=await consumirAPI(1)
    console.log(pok.name)
    console.log(pok.id)*/
   const vectorNombres= await obtenerNombresPokemon(obtenerVectorNumerico())
   console.log(vectorNombres)
   return vectorNombres
  }

  function obtenerAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }
 const  obtenerVectorNumerico=()=>{
    const vector=[]
    for(let i=0; i<4; i++){
        vector[i]=obtenerAleatorio(0,600)
    }
    return vector
  }

  const consumirAPI=async(id)=>{
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json())
  }


const obtenerNombresPokemon=async ([id1,id2,id3,id4])=>{
        console.log(id1)
        console.log(id2)
        console.log(id3)
        console.log(id4)
    const data1=await consumirAPI(id1)
    const data2=await consumirAPI(id2)
    const data3=await consumirAPI(id3)
    const data4=await consumirAPI(id4)
    /*console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4) */
    const obj1={
        nombre:data1.name,
        id:data1.id
    }
    const obj2={
        nombre:data2.name,
        id:data2.id
    }
    const obj3={
        nombre:data3.name,
        id:data3.id
    }
    const obj4={
        nombre:data4.name,
        id:data4.id
    }
    const vectorObjetos=[obj1, obj2,obj3,obj4]
    return vectorObjetos
    
}   

const ontenerNombres=async (arreglo)=>{

    const data=[]
    for(let i=0; i<4; i++){
        data[i]=await consumirAPI(arreglo[i])
    }
    return data
}




  const obtenerPokemonsFachada=async()=>{
    return await obtenerPokemons();
  }


  export default obtenerPokemonsFachada