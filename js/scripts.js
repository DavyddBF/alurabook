var consultaCEP =  fetch('https://viacep.com.br/ws/01001005/json/')
.then(resposta => resposta.json())
.then(resp => {
    if(resp.erro) {
        throw Error('Esse cep não existe')
    }else
        console.log(resp)
})
.catch(erro => console.log(erro))

console.log(consultaCEP)