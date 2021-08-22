// Operadores de comparação

// Irá comparar valores e retornar um boolean como resposta á comparação

let one = 1
let two = 2

//  ==      igual
console.log(one == 1) // true
console.log(one == two) // false
console.log(one == 0.1) // false
console.log(one == "1") // true, o js transformar em number, nesse caso

//  !=      diferente
console.log(one != 1) // false
console.log(one != two) // true

//  ===     estritamente igual
console.log(one === 1) // true
console.log(one === "1") /// false, já nesse por ser estitamente, da falso, pq realmente não é igual

//  !==     estritamente diferente
console.log(one !== 1) //false
console.log(one !== two) //true

//  >       maior
console.log(one > 2) // false

//  >=      maior igual
console.log(one >= 1) // true
console.log(two >= 1) // true

//  <       menor
console.log(one < 2) // true
console.log(two < one) // false

//  <=      menor igual
console.log(one <= 1) //true
console.log(two <= 1) // false