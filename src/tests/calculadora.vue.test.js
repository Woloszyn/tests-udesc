import {mount} from "@vue/test-utils"
import calculadora from '@/components/calculadora'
import { test, expect, describe } from '@jest/globals'

const wrapper = mount(calculadora)
describe("Testando Calculadora", () => {
    const vm = wrapper.vm
    vm.append('1');
    vm.append('5');
    vm.append('+');
    vm.append('1');
    vm.append('0');
    vm.equals();

    let sumResult = vm.$data.valorTotal;

    test( "Teste da soma", () => {
        expect(sumResult).toBe("25")
    } );

    vm.clear()
    let clearResult = vm.$data.valorTotal;
    test("Testa a operação limpar", () => {
        expect(clearResult).toBe("")
    })
    
    vm.append("1");
    vm.append("5");
    vm.append("-");
    vm.append("1");
    vm.append("0");
    vm.equals();

    let subtractResult = vm.$data.valorTotal;
    test("Teste da subtração", () => {
        expect(subtractResult).toBe('5');
    })

    vm.clear();
    vm.append("2");
    vm.append("0");
    vm.append("/");
    vm.append("1");
    vm.append("0");
    vm.equals();

    let divisonResult = vm.$data.valorTotal;
    test("Teste da subtração", () => {
        expect(divisonResult).toBe('2');
    })

    vm.clear();
    vm.append('1');
    vm.append('1');
    vm.append('+');
    vm.append('+');
    vm.append('1');
    vm.append('1');
    vm.equals();

    let testRepetitiveChar = vm.$data.valorTotal;
    test("Teste do caracter de ação repetido", () => {
        expect(testRepetitiveChar).toBe('22')
    });

    vm.clear();
    vm.append('c')
    vm.append('+')
    vm.append('j')
    vm.equals();
    let testInvalidChar = vm.$data.valorTotal;
    test("Teste do caracter inválido", () => {
        expect(testInvalidChar).toBe("Expressão desconhecida")
    })

});