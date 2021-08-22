// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length) //esse .lenght que vai gerar o resultado para string

let number = 1234
// console.log(number.length) vai dar erro, pois o number não recebe length, então é só transforma ele em string
console.log(String(number).length)