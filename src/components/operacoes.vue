<template>
  <div id="operacoes">
      <div class="group-operacao">
          <button class="operacao" @click="aperta(value)" v-for="(value,key) in operacoes" :key="key"> {{value}} </button>
      </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            operacoes:[
                '+', '-', '*', '/', '=', 'CE', 'C'
            ]
        }
    },

    methods:{

        aperta(value) {
            console.log(value)
            switch(true) {
                case ['+', '-', '*', '/'].findIndex((val) => val == value ) != -1:
                    this.$root.$emit('append', value);
                break;
                case 'CE' == value:
                    this.$root.$emit('undo');
                break;
                case '=' == value:
                    this.$root.$emit('equals');
                break;
                case 'C' == value:
                    this.$root.$emit('clear');
                break;
            }

        }

    }


}
</script>

<style>
    #operacoes{
        width: 10%;
        position:fixed;
        right: 40%;
        top: 100px;
    }

    .group-operacao {
        width: 100%;
        height: 533px;
    }

    .operacao{
        width: 100%;
        height: 76.142857143px;
    }

</style>