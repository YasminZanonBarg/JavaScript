// CONTROL FLOW
// toda aplicação tem um fluxo padrão
// em geral em js o código vai ser lido em linha

// IF...ELSE
// Mudam o fluxo da minha aplicação
// if= se else= se não
// if(aqui dentro vai uma CONDICIONAL)
// Posso ter quantos if e else quiser

let temperature = 36

if(temperature >= 37.5) {
    console.log('febre alta')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('febre moderada')
} else {
    console.log('saudavel')
}

/* DICAS
- Sempre use com os blocos {}, mesmo que só com uma linha
- Fazer desse jeito:

    let temperature = 36
    let highTemperature = temperature >= 37.5
    let mediumTemperature = temperature < 37.5 && temperature >= 37


    if(highTemperature) {
        console.log('febre alta')
    } else if(mediumTemperature)
        console.log('febre moderada')
    } else {
        console.log('saudavel')
    }


- Se ele se encaixou na primeira condição, as outras são desconsideradas
*/