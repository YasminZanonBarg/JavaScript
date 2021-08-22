// FOR...IN (CRIA UM LOOP EM CIMA DO OBJETO, PEGANDO SUAS PROPRIEDADES)

let person = {
    name: 'John',
    age: 30,
    weight: 88.9 
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}