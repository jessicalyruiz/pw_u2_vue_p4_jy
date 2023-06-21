<template>
   <section>
        <div id="myCalcu">

        
        <div class="container">
           
       
        <div class="calcu">
        
            <input type="text" name="" id="pantalla" class="display" disabled v-model="pantalla">
            <input type="text" name="" id="resultado" class="display" disabled v-model="resultado">

                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('7')">7</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('8')">8</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('9')">9</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('/')">/</button>

                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('4')">4</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('5')">5</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('6')">6</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('*')">*</button>

                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('1')">1</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('2')">2</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('3')">3</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('+')">+</button>

                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('0')">0</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('.')">.</button>
                    <button type="button" class="btn btn-outline-success" v-on:click="operarNumeros">=</button>
                    <button type="button" class="btn btn-outline-dark" v-on:click="llenar('-')">-</button>

                    <button type="button" class="btn btn-outline-danger" v-on:click="vaciar()" id="btnac">AC</button>

            
        
    </div>
</div>
</div>

    </section>
</template>

<script>
export default {
    name:"CalcuVue",
    data() {
        return {
            num1: 0,
            num2: 0,
            resultado: '',
            pantalla: '',
        }

    },

    methods: {

        sumar()  {
            return this.num1 + this.num2;
        },
        restar() {
            return this.num1 - this.num2;
        },
         multiplicar() {
            return this.num1 * this.num2;
        },
         dividir()  {
            return this.num1 / this.num2;
        },

         llenar  (dato)  {
            console.log('llenar ' + dato)
            let operacion=this.pantalla
            operacion+=dato
            console.log('operacion: '+ operacion)
            this.pantalla=operacion
            console.log('pantalla'+this.pantalla)
           
        },




         vaciar () {
            this.pantalla = '';
            this.resultado = ''
        },





    },
    computed:{
        
        operarNumeros  ()  {
            console.log('operar numeros')
            this.llenar('=');
            let operacion = this.pantalla
            let num1 = '', num2 = '', simbolo = '';
            let op = false;
            for (let i = 0; i < operacion.length; i++) {
                console.log('for operar numeros : ' + i)
                if (operacion[i] !== '+' && operacion[i] != '-' && operacion[i] != '*' && operacion[i] != '/' && !op) {
                    num1 += operacion[i]
                    console.log('num1: ' + num1)
                } else {
                    if (op) {
                        if (operacion[i] == '=') break;
                        num2 += operacion[i]
                        console.log('num2 ' + num2)
                    } else {
                        console.log('operar numeros else, operacion ')
                        simbolo = operacion[i]
                        console.log('operacion ' + simbolo)
                        op = true;
                    }
                }
            }
            this.num1 = parseFloat(num1);
            this.num2 = parseFloat(num2);
            switch (simbolo) {
                case '/':
                    console.log('dividir')
                    let r = this.dividir()
                    console.log(r)
                    this.resultado = r
                    break;
                case '*':
                    this.resultado = this.multiplicar()
                    break;
                case '+':
                    this.resultado = this.sumar()
                    break;
                case '-':
                    this.resultado = this.restar()
                    break;
            }
        }
    }


}
</script>

<style>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.calcu{
    display: grid;
    grid-template-columns: repeat(4,75px);
    /*grid-template-rows: repeat(4,75px);*/
    background-color: pink;
    padding: 20px;
    border-radius: 35px;
    box-shadow: 20px 10px 50px 20px black;
}

#btnac{
    grid-column: span 2;
}
.display{
    grid-column: span 4;
}

@font-face {
    font-family: 'charlinda';
    src: url('../assets/fonts/charlinda.ttf') format('truetype');
}

h1{
    font-family: 'charlinda';
    padding: 30px;
    text-align: center;
}

.btn{
    margin: 6px;
    border-radius: 35px;
    background-color: rgb(253, 222, 227);
    box-shadow: 5px 5px 5px 1px;
}
</style>