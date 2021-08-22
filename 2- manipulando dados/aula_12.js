// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodejs")
// Adicionar um item no começo
techs.unshift("sql")
// Remover do fim
//techs.pop() // se eu repetir + um, vai retirando mais uma palavra
// Remover do começo
//techs.shift()
// Pegar somente alguns elementos do array
//console.log(techs.slice(1,3)) // primeiro argumento: posição de inicio desejada
                               // segundo argumento: qual que é a posição final (contando em elemento, n arra
// Remover 1 ou mais itens em qualquer posição do aray  
//techs.splice(1,2) // primeiro argumento: oq eu quero tirar
               // segundo argumento: quantos elementos quero tirar, (1,1) tiro só o css
// Encontrar a posição de um elemento no array  
let index = techs.indexOf ('css')     
techs.splice(index, 1)    // ele vai buscar a posiçao dele e deletar pra mim****     
               
console.log(techs)
