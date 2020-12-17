<template>
    <div id="calculadora">
        <visor ref="visor" :valorTotal="valorTotal"></visor>
        <numeros ref="numero" ></numeros>
        <operacoes ref="operacao"></operacoes>
    </div>
</template>

<script>

import visor from './visor'
import numeros from './numeros'
import operacoes from './operacoes'

export default {

    components: {
        visor,
        numeros,
        operacoes
    },
    data() {
        return {
            valorTotal:""
        }
    },
    methods:{

        append(value) {
            if(value.length == 1) {
                if (this.supportValue(value)) {
                    if((this.valorTotal + value).length <= 17 ) {
                        this.valorTotal += value
                    }
                }
            }
        },

        supportValue(valor) {
            if(['1','2','3','4','5','6','7','8','9','0','/','*','-','+','.'].findIndex((val) => val == valor.toString() ) != -1) {
                if (['/','*','-','+','.'].findIndex( (a) => a == valor) != -1) {
                    if ( (['/','*','-','+','.'].findIndex( (v) => this.valorTotal[this.valorTotal.length -1] == v) != -1)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },

        equals() {
            if(this.valorTotal) {
                if ( (['/','*','-','+','.'].findIndex( (v) => this.valorTotal[this.valorTotal.length -1] == v) == -1)) {
                    this.valorTotal = eval(this.valorTotal).toString();
                    return true;
                }
            }
            this.valorTotal = "Expressão desconhecida"
            return false;
        },

        clear() {
            this.valorTotal = '';
        },

        undo() {
            if(this.valorTotal == "Expressão desconhecida") {
                this.clear();
            } else {
                let length = this.valorTotal.length;
                this.valorTotal = this.valorTotal.substring(0, length - 1);
            }
        }

    },
    mounted() {
        let me = this;
        this.$root.$on( 'append', (value) => {
            me.append(value);
        } );

        this.$root.$on( 'clear', () => {
            me.clear();
        } );

        this.$root.$on( 'undo', () => {
            me.undo();
        } );

        this.$root.$on( 'equals', () => {
            me.equals();
        } );

    }

}
</script>

<style>

</style>