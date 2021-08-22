/* SISTEMA DE GASTO FAMILIAR

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que orá calcular o total de receitas e despesas e irpa mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [20,909, 360, 100, 100.435],
    expenses: [500, 1000, 400, 100]
}

function sum(array) {
    let total = 0;
    
    for(let value of array){
        total += value
    }

    return total
}



function calculateBalance () {
   const calculateIncomes = sum(family.incomes)
   const calculateExpenses = sum(family.expenses)

   const total = calculateIncomes - calculateExpenses

   const itsOK = total >= 0

   let balanceText = "negativo"

   if (itsOK) {
       balanceText = "positivo"
   }

   console.log("O saldo familiar é " + balanceText + ":" + " " + total.toFixed(2) + " " + "reais.")
   
}

calculateBalance()