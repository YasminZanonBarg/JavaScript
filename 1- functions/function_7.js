/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

// P do person, maiúsculo
function Person(name, age) {
    this.name = name
    this.age = age
    this.walk = function() {
        return this.name + " está andando e tem " + this.age + " anos."
    }
}

const mayk = new Person("Mayk", 33)
const joao = new Person("Joao", 21)
console.log(mayk.walk())
console.log(joao.walk())

/* OBS: quando uso a palavra new seguida da função, vai retornar como um objeto.
        O this sempre vai referenciar a variavel feita feita, nesse caso a const mayk e joao.
*/