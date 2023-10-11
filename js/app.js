// #Carosello Mono Array

// #obbiettivo
//-visualizzare le img in un carosello
//-con due pulsanti scorrere tra le immagini
//-img caricate dinamicamente da un array js

// #inizializazzione
//-creare html
//-container con img al centro
//-creare bottoni

//-rimuovere markup statico e inserire su js
//-fare un array con le 5 img
const images = [  //-creare variabile//-assegnare valore variabile
  "./img/01.webp",
  "./img/02.webp",
  "./img/03.webp",//-aprire parentesi quadre e inserire le 5 img
  "./img/04.webp",
  "./img/05.webp"
]


// DOM
const containerDomElement = document.querySelector('.carousel-container');
// -creare variabile per sapere img attiva
let imgActive = 0 //- assegnare variabile attiva //-partendo da zero let active = 0


console.log(images.length);
//-creare ciclo for 
for (let i = 0; i < images.length; i++) {
  // console.log(i)
  let currentImg = images[i]
  console.log(currentImg);

  // che concatena un template literal
  const htmlString = `
  <div class="carousel-image"> 
    <img src="${currentImg}">
  </div>
  `
  console.log(htmlString);

  containerDomElement.innerHTML += htmlString;
}
// immgaini dal DOM 
const itemDOMElements = document.querySelector('carousel-image')
console.log(itemDOMElements)


//-img nascoste
//-la prima avrà una classe specifica per essere visualizzata
let currentPic = itemDOMElements[imgActive]
currentPic.classList.add('active')

//bottoni DOM 
const buttonNextDomElement = document.querySelector('.next-button');
const buttonPrevDomElement = document.querySelector('prev-button');

//click bottoni
buttonNextDomElement.addEventListener('click', function(){
  console.log('click next')
  console.log(itemDOMElements[imgActive + 1])
})

buttonPrevDomElement.addEventListener('click', function(){
  console.log('click prev')
  console.log(itemDOMElements[imgActive])
})