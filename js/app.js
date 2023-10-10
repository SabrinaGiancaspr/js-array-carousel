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
  "../img/01.webp",
  "../img/02.webp",
  "../img/03.webp",//-aprire parentesi quadre e inserire le 5 img
  "../img/04.webp",
  "../img/05.webp"
]
console.log(images)

// -creare variabile per sapere img attiva
const imgActive = 0//- assegnare variabile attiva //-partendo da zero let active = 0



//-creare ciclo for che concatena un template literal
//-img nascoste
//-la prima avrà una classe specifica per essere visualizzata

//-fare il click con le frecce per cambiare l'img con la classe
