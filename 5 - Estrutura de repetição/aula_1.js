// ESTRUTURA DE REPETIÇÃO

// FOR
/*
 - declara a variavel (let i = 0) 
 - verifica o parementro (nesse caso se i é menor que 10)
 - Se for verdadeiro ele executa o bloco de código, incrimentando o que colocamos após esse parametro (nesse caso, i++)
   até o parmetro não ser mais verdadeiro
*/


 for (let i = 0; i <= 100; i++) { 
    // podemos usar duas estruturas aqui dentro
    if (i === 50) {
        break;  // para a execução do código
    }if (i === 30){
        continue; // pula a execução no momento
    }

     console.log(i)
 }
