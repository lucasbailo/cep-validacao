
async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepJson = await consultaCep.json()
        console.log(consultaCepJson)
        if (consultaCepJson.erro) {
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        
        cidade.value = consultaCepJson.localidade;
        logradouro.value = consultaCepJson.logradouro;
        estado.value = consultaCepJson.uf;
        
        console.log(consultaCepJson);
        return consultaCepJson;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))