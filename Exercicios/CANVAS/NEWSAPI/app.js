const API_KEY = '91f9711156fe4bee98da30ffce742136'

function exibeNoticias () {
    let divTela = document.getElementById('tela')
    let texto = ''

    //Montar texto HTML das notícias
    let dados = JSON.parse(this.responseText)



    //Preencher a DIV com o texto HTML
    divTela.innerHTML = texto
}



function executaPesquisa () {

    let query = document.getElementById('txtPesquisa').value

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
    xhr.send()
}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa)