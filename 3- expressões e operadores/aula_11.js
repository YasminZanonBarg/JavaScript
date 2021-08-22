/* 
    Type conversion (typecasting) vs Type coersion
*/

// console.log(Number('9') + 5)


/*
    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório ( condicionais e loops )
    - vamos ver mais exemplo pra frente, porém já vimos o exemplo de um ternario

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( false ? 'verdadeiro' : 'falso' )

// ele vai entender que são falsos, esses escritos a cima, ex: **ele faz a coersion sozinho
console.log( "" ? 'verdadeiro' : 'falso' )

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( true ? 'verdadeiro' : 'falso' )

// ele vai entender que são falsos, esses escritos a cima, ex: **ele faz a coersion sozinho
console.log( Infinity ? 'verdadeiro' : 'falso' )