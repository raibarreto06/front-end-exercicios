let livrol = document.getElementById('o-cortico');
    console.log('typeof livrol: ', typeof livrol);

let links = document.getElementsByTagName('a');
    console.log('links:', links);

let livro2 = document.querySelector('#vidas-secas');
    console.log('livro2:', livro2);

let navlistFooter= document.querySelector('.footer-links .nav-list');
    console.log('navlistFooter:', navlistFooter);

let navlistHeader= document.querySelector('.header-links .nav-list');
    console.log('navlistHeader:', navlistHeader);


livrol.style.color = '#AA0000'

let paragrafo = livrol.querySelector('p');
paragrafo.style.color = 'red' ;

livro2.className = 'card-livro fora-de-estoque';
console.log('livro2.class.Name:', livro2.class.Name:);

let capaDoLivro = document.querySelector('.capa-livro');
capaDoLivro.setAttribute('src','images/capas/o-cortico.jpeg');

let novoParagrafo = document.createAttribute ('p');

novoParagrafo.textContent = 'Clarice Lispector';
 
ley tituloLivro3 = document.querySelector('#dom-casmuro .titulo-livro');

tituloLivro3.after(novoParagrafo);