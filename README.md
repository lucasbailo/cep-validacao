## Welcome! 👋

# Auto Complete with API

This is a code from [Alura](https://www.alura.com.br). In this course, I learned how to manipulate DOM with JavaScript, use an API and async functions.

### Screen Shots
- ScreenShot
![](./img/full%20size.png)

## Some code that I'm proud of
```js
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
```

## Built with

- Semantic HTML5;
- CSS custom properties;
- JavaScript;
- Async functions.

## Test the project yourself: [Teste the project here!!!](https://cep-validacao.vercel.app/)

### You can:

- Type your adress;
- Validate your CEP;
- Auto complete using only your CEP.

## Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)