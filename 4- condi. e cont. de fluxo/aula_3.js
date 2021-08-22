// SWITCH
// é uma declaração semelhante a if...else
// () vai qualquer expressão ali dentro
// não esquecer do break, pq se não dá erro
// o default é se não for nenhum dos casos mencionados
/* estrutura:

let expression = 'a'

switch (expression) {
    case 'a':
        // código
        console.log('a')
        break
    case 'b':
        // código para expressão b
        console.log('b')
    default:
        console.log('default')
        break
    }

*/

// calculadora:

function calculate(number1, operator, number2) {
    let result = 0;

switch (operator) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break
    case '/':
        result = number1 / number2
        break
    default:
        console.log('não implementado')
        break
}
 return result
}

console.log(calculate(4, '+', 3 ))