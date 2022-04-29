let listaDeFilmes = [
    'https://imagens.ebc.com.br/70-rZMi6fTwlz8DrudsE2MzzHmU=/365x0/smart/https://radios.ebc.com.br/sites/default/files/thumbnails/image/cartaz_do_filme_laranja_mecanica.jpg',
    'https://cinemaemcena.com.br/uploads/criticas_old/interstellar_poster5.jpg',
    'https://m.media-amazon.com/images/I/614qzkpKLcL._AC_SX522_.jpg',
    'https://m.media-amazon.com/images/I/71yOrLG9Z+L._AC_SX522_.jpg' ,
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
    'https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_SY550_.jpg',
    'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG',
    'https://seuladogeek.com.br/wp-content/uploads/2022/04/Jogador-No-1.jpg',


]

let listaDeTitulos = [
'Laranja Mecanica' ,
'InterEstelar',
'Truque de Mestre',
'Cantando na Chuva',
'Efeito Borboleta',
'Jurassic Park',
'Matrix',
'Jogador N° 1'

]

//! DOM DOCUMENT OBJECT MODEl acessar e manusear doc no js
//!tudo que envolve a pag (html etc)

let catalogo = document.querySelector ('#catalogo')
let i = 0
let erro = document.querySelector('#erro')
