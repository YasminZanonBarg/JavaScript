<script>
    // Variáveis e tipos de dados
    // Declaração or declaration
    var name

    // Assignment or atribuição de valores
    name = "Mike"

    // Que tipo de dado foi colocado na variável
    // console.log(typeof name)

    // Agrupamento de declarações
    let age, isHuman

    age = 18
    isHuman = true

    // multiplos argumentos na função:
    // console.log(name, age, isHuman)

    // escrita de texto + variáveis

    // cocatenando valores:
    // console.log(' o ' + name + ' tem ' + age + ' anos.')

    // interpolando valores com tamplete literals or template strings
    console.log(`o ${name} tem ${age} anos.`)

</script>





```js
// Object

const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)
```




```js
// Array

const animals = [
    'Lion',    // 0
    'Monkey',  // 1

    // abrir um objeto:
    {
        name: 'Cat', //2
        age: 3
    }
]

// acessar valores dentro do arrey:
//console.log(animals[2].name)
console.log(animals) // consigo ver tudo detalhado, para não me perder
```