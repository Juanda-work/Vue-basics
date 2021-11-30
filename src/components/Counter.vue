<template>
  <h2>{{customTitle}}</h2>
  <p> {{counter}} <sup>2</sup> = {{ squareCounter }}</p>

  <div class="buttons-container">
        <!-- La arroba reemplaza v-on: -->
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>
  </div>
</template>

<script>
    export default {
        // props: ['title', 'start'],
        props: {
            'title' : String,
            'start' : {
                type: Number,
                // required: true,
                default: 100,
                validator: function(value){
                    return value >= 0
                }
            }
        },
        name: "counter",
        data(){
            return{
                counter : this.start
            }
        },
        methods:{
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter ++
            },
            decrease(){
                this.counter --
            }
        },
        /* La diferencia entre 'computed' y 'methods' es que los métodos se 
          ejecutarán cada vez que se les llame; por el contrario, 
          las propiedades computadas se guardan en caché y solo se ejecutará
          1 vez. ES MEJOR COMPUTED, MENOS GASTO DE MEMORIA */
        computed: {
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                // return this.title ? this.title : "Counter"
                return this.title || "Counter"
            }
        }

    }
</script>

<style>

    button{
        background-color: lightgreen;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: lightseagreen;
        transition: 0.3s ease-in-out;
    }

</style>