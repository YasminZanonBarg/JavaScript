// THROW E TRY/CATCH

// throw (disparar, lançar)
function sayMyName (name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    
    console.log(name)
}

// try(tentar)...catch (pegar)
try {
    sayMyName('Carla')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

// vamos "tentar" executar um bloco de código e se der algum erro, ele vai ser "diparado" e vou poder "captura-lo"
// Esse sistema ajuda a gente a identificar erros e perceber alguma falha na apicação