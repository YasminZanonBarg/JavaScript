// fuction hoisting

// oq acontece quando eu executo a função primeiro e depois eu crio a função?
    sayMyName()

    function sayMyName(){
        console.log('Mayk')
    }
// É como se de baixo dos panos os js faz:

    function sayMyName(){
        console.log('Mayk')
    }

    sayMyName()

/*Porém quando é uma função anonima, onde a função tá dentro de uma váriavel, isso não funciona:
 var sayMyName = function(){
        console.log('Mayk')
    }
*/