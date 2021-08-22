<script>

    /* Criando uma variavel
        OQ É? Nome simbólico para recber algum valor (string, number, boolean...), chamados de identificadores tmb.
        3 PALAVRAS RESERVADAS PARA CRIAR UMA VÁRIAVEL:
        *var
        *let
        *const
    */

    var clima = "Quente"
    clima = "frio" //esse aqui que vale, pq foi o último que apareceu

    // mas se eu usasse o const clima = "Quente", ele não iria mudar pq o const é CONSTANTE
    
    console.log(clima)

</script>

# O JS é uma linguagem fracamente tipada e dinâmica
- não preciso ter um tipo previamente definido
- e podemos mudar o conteudo da variavel

exemplo:

<script>

    // Se fosse fortemente tipada
    let clima:String = ""

    // já como é fracamente tipada, o tipo já existe no momento em que eu atribuo o valor
    let clima = ""

    console.log(clima) // para saber o tipo de colocar: console.log(typeof clima)

<script>

