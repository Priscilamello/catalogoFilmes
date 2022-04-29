let listaDeFilmes = [
    'https://imagens.ebc.com.br/70-rZMi6fTwlz8DrudsE2MzzHmU=/365x0/smart/https://radios.ebc.com.br/sites/default/files/thumbnails/image/cartaz_do_filme_laranja_mecanica.jpg',
    'https://cinemaemcena.com.br/uploads/criticas_old/interstellar_poster5.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
    'https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_SY550_.jpg',
    'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG',
    'https://www.filmelgbt.com/wp-content/uploads/2018/09/yXW8XocbanLYcQHmQkqq0clNCFI.jpg',


]

let listaDeTitulos = [
'Laranja Mecanica',
'InterEstelar',
'Efeito Borboleta',
'Jurassic Park',
'Matrix',
'Priscila A Rainha do Deserto',

]

//! DOM DOCMENT OBJECT MODEL
let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
  catalogo.innerHTML += `<div class="filme">
    <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
  </div>`
}

let filmeRepetido = true

function cadastrar() {
  let novoFilme = document.querySelector('#filme').value
  
  let novoTitulo = document.querySelector('#titulo').value
  
  if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
    erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
  }else{
    listaDeFilmes.push(novoFilme)
    listaDeTitulos.push(novoTitulo)
    erro.innerHTML = ''
    mostraFilmes()
  }
  document.querySelector('#filme').value = ''  
  document.querySelector('#titulo').value = ''  
  
}

function mostraFilmes() {
   do{
       catalogo.innerHTML += `
       <div>
       <img src = ${listaDeFilmes[i]} alt=${listaDeTitulos[i]}><figcaption${listaDeTitulos[i]}
       </div>
       `
       i++
   } while (i < listaDeFilmes.length)

   
}