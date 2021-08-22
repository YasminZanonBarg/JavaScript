/*  TRANSFORMAR NOTAS ESCOLARES

Crie um algoritimo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* De 90 para cima = A
* Entre 80 - 89   = B
* Entre 70 - 79   = C
* Entre 60 - 69   = D
* Menor que 60    = F

*/

// COMO EU FIZ:

let score = 100


if (score > 100 || score < 0) {
  console.log('NOTA INVÁLIDA')
} else if (score >= 90) {
  console.log('NOTA A')
} else if (score <= 89 && score >= 80) {
  console.log('NOTA B')
} else if (score <= 79 && score >= 70) {
  console.log('NOTA C')
} else if (score <= 69 && score >= 60) {
  console.log('NOTA D')
} else {
  console.log('NOTA F')
}

//COMO ELE FEZ

function getScore(score) {

  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal //para aparecer lá "fora"

}

console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore(60))
console.log(getScore(48))
console.log(getScore(81))
console.log(getScore(90))
console.log(getScore(75))
console.log(getScore(0))

//O bom de fazer com a função é que eu já consigo testa