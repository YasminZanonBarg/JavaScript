// Operador Condicional (Ternário)

// Dependendo de condição, nós recebermos valores diferentes

// Condição então valor 1 se não valor 2
// condition ?(então) value1 :(se não) value2

//Exemplos
// Café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'
console.log(niceBreakfast)

// Maior de 18
let age = 16

const canDrive = age >= 18 ? 'can drive' : 'cannot drive'
console.log(canDrive) 