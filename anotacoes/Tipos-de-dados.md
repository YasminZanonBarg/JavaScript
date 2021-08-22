# TIPOS DE DADOS

> Vamos aprender os tipos de dados mais utilizados na linguagem

# String:
* Cadeia de caracteres (um texto), colocar entre:
    "" = aspas duplas
    '' = aspas simples
    `` = template literals ou template string (CRASES) 

exemplo: console.log("mayk") ou console.log('mayk') ou console.log(`mayk`)

// OBS: mas quando usar cada um? quando eu quiser mostrar aspas simples, eu coloco ao redor as aspas duplas (console.log("'mayk'")) e virse-versa. Mas quando eu quiser mostrar as aspas simples e duplas, eu coloco as crases. Uso crase quando tenho multiplas linhas tmb e quando uso expressoes de linguagens como: cosole.log(`mayk ${1+1}`), que é dois.

# Number:
* Números, existem:
    Inteiros= positivos ou negativos, ex.33
    Reais/float= número com virgula (mas coloque com ponto), ex.12.5
    NaN= Not a Number
    Infiniy/Infinito (vc compara, para ver se é verdadeiro. ex: console.log(12.5 === Infinity)) SEMPRE O I MAIÚSCULO

exemplo: console.log(12.5 + 40)

# Boolean:
* Tipo de dado que só tem 2 valores, ou ele é:
    true= verdadeiro
    false= falso

> parece ser simples, mas é muito usado e lógica de programação
exemplo: console.log(false)

# Undefined vs null:
* Undefined
    Indefinido
> Algo que realmente não vai existir

* Null
    Nulo
    Objeto que não tem nada dentro
    diferente de indefinido
> Null, é algo que não tem nada dentro dele

# Object: (dado estrutural)
* Objeto, todo objeto tem:
    propriedades ou chamados de atributos
    funcionalidade ou métodos

 {propriedades: "valor" }

 exemplo: console.log({
     name:"mayk",
     idade:"36",
     andar:function(){
         console.log('andar')
     }
 })

 # Array (vetores): (dado estrutural)
    * Nada mais é do que uma lista
    * Agrupamento de dado

    ["mayk", 36]

exemplo:
console.log([
    "Leite",
    "Ovos",
    2,
    3
])
 
 Vai ficar assim: leite, ovos, 2, 3


 // Data types (tipos de dados)
    PRIMITIVE / PRIMITIVE VALUE (PRIMITIVOS):
    *Não é um objeto e o valor dele é imutavel 
    *ex. 23 não é a mesma coisa que 32
    - String
    - Number
    - Undefined
    - Boolean
    - Symbol
    - BigInt

    STRUCTURAL (ESTRUTURAL)
    *recebem atributos e funcionalidades
    - Object
        Array
        map
        set
        date
        ..
    - Function

    STRUCTURAL PRIMITIVE / STRUCTURAL ROOT PRIMITIVE (PRIMITIVO ESTRUTURAL)
    * Objeto vazio
    -Null