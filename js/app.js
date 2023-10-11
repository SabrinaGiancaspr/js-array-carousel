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

// recupero dal DOM il container del carosello
const containerDomElement = document.querySelector('.carousel-container');
console.log(images.length);

//-creare ciclo for 0 < images.length (5) fin quando è minore il ciclo continua 
for (let i = 0; i < images.length; i++) {
  // console.log(i)
  let currentImg = images[i] //assegno variabile per definire currentimg delle img del indiex
  console.log(currentImg);

  // creo un template literal che sovrascrive il mio contenuto html aggiungengo anche una classe per le mie img
  const htmlString = `
  <div class="carousel-image"> 
    <img src="${currentImg}">
  </div>
  `
  console.log(htmlString);

   containerDomElement.innerHTML += htmlString; // aggiungo contenuto al mio inner html
}

//assegno variabile per le img e le riprendo dal DOM  
const itemDOMElements = document.querySelectorAll('.carousel-image')
console.log(itemDOMElements)

//creare variabile 
let imgActive = 0 //- assegnare variabile attiva partendo da zero (prima immagine)

//-img commentate tu html
//alla prima img bisogna aggiungere la classe active
let currentPic = itemDOMElements[imgActive]
currentPic.classList.add('active')

//recupero bottoni DOM 
const buttonNextDomElement = document.querySelector('.next-button');
const buttonPrevDomElement = document.querySelector('.prev-button');

//click bottoni prima rimuovo la classe attiva alla img
buttonNextDomElement.addEventListener('click', function(){
  console.log('click next')
  itemDOMElements[imgActive].classList.remove('active');
  imgActive++; //incremento per selezionare l'img successiva
  if(imgActive === images.length){ //la mia img attiva è uguale alla lunghezza del mio array
    imgActive = 0 //img 1 + 1
  }
  itemDOMElements[imgActive].classList.add('active'); //aggiungo all'altra img la classe active
})

buttonPrevDomElement.addEventListener('click', function(){ //qui al contrario 
  console.log('click prev')
  itemDOMElements[imgActive].classList.remove('active'); //click bottoni prima rimuovo la classe attiva alla img
  imgActive--; //decrementare per selezionare l'img precedente
  if(imgActive < 0){ 
    imgActive = images.length -1 
  }
  itemDOMElements[imgActive].classList.add('active');
})
