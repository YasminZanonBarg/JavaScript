# SCOPE OU ESCOPO
    * Determina a visibilidade de alguma variável no JS

# Block statement (declaração de bloco)
```js
// vamos iniciar um bloco
{
    // Aqui dentro posso colocar qualquer código
}// aqui fechamos o bloco
```
O bloco, tmb crirá um novo escopo. Chamamos de `block-scoped`



# SCOPE C/ VAR
```js
// var é global e poderá funcionar fora de um escopo de bloco, ela também é local, dentro do escopo.

* Maneira "errada", vai dar como indefinido

<scripit>

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

</scripit>

// pois de baixo dos panos, js faz assim quando é com var:

<scripit>

var x

console.log('> existe x antes do bloco? ', x)

{
    x = 0
}

</scripit> 

// o nome de conceito é HOISTING (elevação)
```
 

# SCOPE C/ LET E CONST
```js
// são locais e só funcionam no escopo onde foi criada


        <scripit>

            let y = 1;

            {
                let y = 0 // sempre primeiro
                console.log('> existe y? ', y)  // vai ser 0, pois está dentro de um block-scoped
            }

            console.log('> existe y depois do bloco? ', y) //vai ser 1, pq tá no block stantement

        </scripit>

MAS***

        <scripit>

            let y = 1;

            {
                y = 0 
                 console.log('> existe y? ', y) 
            }

            console.log('> existe y depois do bloco? ', y) 

            // OBS: os dois vão dar zero, pois dentro do bloco criado, não foi especificado uma variavel, procurando o y de algum lugar, nesse caso trouxe o y do escolpo anterior.

        </scripit>

* Com a constante não dá pra fazer isso, apenas criar varias constantes, mas cada uma tera seu valor.        

