// Manipulando Strings e Arrays

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") // O split recebe como argumento oq eu quero separar/tirar dessa frase, se torna tmb um array
let phraseWithUnderscore = myArray.join("_") // o metodo join aplicado com um array, junta automaticamente o array, colocar dentro do (""), oq quer que seja esse separador
console.log(phraseWithUnderscore.toLowerCase())

