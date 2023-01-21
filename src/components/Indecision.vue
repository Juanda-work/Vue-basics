<template>

    <div class="indecision-container">
    <!-- el 'src' tiene un shortcut de "v-bind:src" -->
    <img v-if="isValidQuestion" :src="image" alt="bg">
    <div class="bg-dark"></div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Hazme una pregunta"
          v-model="question">
        
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        
        <div v-if="isValidQuestion">
            <h2> {{question}} </h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            question: null,
            answer : null,
            image : null,
            isValidQuestion : false
        }
    },
    methods:{
        async getAnswer(){
            this.answer = "Pensando..."
            const {answer, image} = await fetch("https://yesno.wtf/api").then( r => r.json() )
            
            answer === "yes" ? this.answer="sisas" : this.answer="Nones"            
            this.image = image
        },
    },
    watch:{
        //En el watch, se debe llamarse igual a la propiedad que se quiere observar.
        question(value, oldValue){
            this.isValidQuestion = false
            if (!value.includes('?')) return

            this.isValidQuestion = true
            this.getAnswer()
        }
    }
}
</script>

<style scoped>
    
</style>