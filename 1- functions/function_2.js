/* Declarar função dentro de uma variavel
 Another way  to make a declaration (declaração de função), call of:
    -> FUNCTION EXPRESSION
    -> FUNCTION ANONYMOUS (because don't have a name)
*/

//sum = somar
// parâmentros (parameters):
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}
// Uma função quando chega em return, ela logo para de executar o código e volta

//sum(2, 3) //arguments (argumentos)
/* então, toda vez que eu quiser fazer somas, posso:
sum(4, 5)
sum(34, 0.99999)*/

// vamos fazer diferente:

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1,number2)}`)

/*OBS: VAI DAR ERRO DESSA FORMA, PQ QUANDO UMA FUNÇÃO NÃO TEM ESCRITO RETURN, ELA VAI RETORNAR UNDEFINED
VAI DAR UNDEFINED:
    const sum = function(number1, number2){
        console.log(number1 + number2)
    }
VAI DAR CERTO:
    const sum = function(number1, number2){
        let total = number1 + number2
        return total
    }



/*RESUMO: APRENDEMOS A PASSAR ARGUMENTOS PARA A INVOCAÇÃO DE UMA FUNÇÃO 
          APRENDEMOS A FAZER OS PARÂMENTROS QUE VÃO RECEBER OS ARGUMENTOS DA FUNÇÃO
*/