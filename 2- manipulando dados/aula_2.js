/*
    TYPE CONVERSION (typecasting) vs TYPE COERSION

    * Alteração de um tipo de dado para outro tipo

     type conversion= a gente explicitamente alteramos de um dado p/ outro
     type coersion= é o js implicidamente fazendo essa troca

*/

//EXEMPLO:

console.log( '9' + 5) 
// o +, no js serve para somar ou juntar as palavras, nesse caso o resultado vai dar 95, pq de baixo dos panos o js, faz:
//console.log('9' + '5')

// isso que aconteceu foi uma coersion, mas podemos nos mudarmos a mao (conversion)

console.log(Number("9") + 5)
