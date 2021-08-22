// Callback functions

function sayMyName(name){
    console.log('antes de executar a callback')

    // console.log(name), porem como o argumento do paramento é uma função, posso simplismente:
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)