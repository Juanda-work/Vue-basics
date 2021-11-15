<template>
  <h2>Counter!!</h2>
  <p> {{counter}} <sup>2</sup> = {{ squareCounter }}</p>
</template>

<script>
    export default {
        name: "counter",
        data(){
            return{
                counter : 5
            }
        },
        methods:{
            getSquareValue(){
                return this.counter * this.counter
            }
        },
        /* La diferencia entre 'computed' y 'methods' es que los métodos se 
          ejecutarán cada vez que se les llame; por el contrario, 
          las propiedades computadas se guardan en caché y solo se ejecutará
          1 vez. ES MEJOR COMPUTED, MENOS GASTO DE MEMORIA */
        computed: {
            squareCounter(){
                return this.counter * this.counter
            }
        }
    }
</script>

<style>

</style>