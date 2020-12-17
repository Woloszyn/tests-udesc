<template>
  <div id="numeros">
      <div class="group-numbers" >
          <button @click="adicionarNumero(value)" v-for=" (value, key) in numbers" :key="key" class="number"> {{value}} </button>
      </div>
  </div>
</template>

<script>
export default {

    data: function(){
        return {
            numbers: ['1','2','3','4','5','6','7','8','9','0', '.'],
        }
    },

    methods: {
        adicionarNumero(numero) {
            this.$root.$emit('append', numero);
        }
    }

}
</script>

<style>

.group-numbers {
    width: 100%;
    height: 533px;
}

.number{
    width: 33.33%;
    height: 133.33px;
}

#numeros{
    width: 30%;
    position: fixed;
    left: 20%;
    top: 100px;
}

</style>