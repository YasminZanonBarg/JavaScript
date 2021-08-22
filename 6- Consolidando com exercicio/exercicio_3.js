/*
function (){
  C = "celsius"
  F = "fahrenheit"
}


const conversion = function(C, F){
  
  if(C) {
    total = (F - 32) * 5/9
} else if(F) {
    total = C * 9/5 + 32
} else {
    console.log('Opção inválida')
}

} */


// TransformDegree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // Fluxo ideal (F -> C)
  let uptadeDegree = Number(degree.toUpperCase().replace("F", ""));
  
  let formula = fahrenheit => (fahrenheit - 32) * 5/9

  let degreeSign = 'C'

  // Flucxo anternativo (C -> F)
  if (celsiusExists){
    uptadeDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius =>  celsius * 9/5 + 32
    degreeSign = 'F'
  }
  
  return formula(uptadeDegree).toFixed(2) + degreeSign

}

try {
  console.log(transformDegree('30C'))
  console.log(transformDegree('60f'))
  console.log(transformDegree('8G'))
} catch(error) {
  console.log(error.message)
}