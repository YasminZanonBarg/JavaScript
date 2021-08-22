```js

    // 1. Declare uma variável de nome weight
    let weight
    
    // 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)
    R: undefined

    // 3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string
        * age: number (integer)
        * stars: number (float / quebrado)
        * isSubscribed: Boolean
    
    R:
        let name = "Mayk"
        let age = 33
        let stars = 4.9
        let isSubscribed  = true

    /* 4. A variável student abaixo é de que tipo de dados?
        R: Object

       4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
        R:
            let student = {
                 name: "Mayk",
                 age: 33,
                 stars: 4.9,
                 isSubscribed: true
             }

             console.log(student)

       4.2 Mostre no console a seguinte mesagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
        
        R:
        let student = {
            name: "Mayk",
            age: 33,
            stars: 4.9,
            weight: 83,
            isSubscribed: true
        }

        console.log(student.name + ' de' + ' idade ' + student.age + ' pesa ' + student.weight)
        ou:
        console.log(` ${student.name} de idade ${student.age} pesa  ${student.weight} kg.`)
    */
    
    // 5. Declare uma váriavel do tipo array, de nome student e atrubua a ela nenhum valor, ou seja, somente o array sozinho
    R: let student = []

    // 6. Retribua valor para a variável acima, colocando dentro dela o objeto students da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
    R:
        let student = {
            name: "Mayk",
            age: 33,
            stars: 4.9,
            isSubscribed: true
        }// já tinha

        students = [
            student
        ]

        console.log(students)

    // 7. Coloque no console o valor da posição zero do array acima
    R:
        console.log(students[0])

    // 8. Crie um novo student e coloque na posição 1 do Array students
    R: 
    let student = {
            name: "Mayk",
            age: 33,
            stars: 4.9,
            isSubscribed: true
        }
    
    const student1 = {
        name: "john",
        age: 43,
        stars: 5,
        isSubscribed: true
    }

    students = [
        student
        student1
    ]

    console.log(students[1])
    /* ou students[1] = john
    console.log(students) */

    /* 9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

        console.log(a)
        var a = 1 
    */
   R: undefined, pois o console.log(a) deveria estar no final para dar o valor de 1, pq existe o efeito hoisting, onde acontece assim:

    var a 
    console.log(a) // aqui a variavel a, ainda não tem nenhum valor atribuido
    a = 1
