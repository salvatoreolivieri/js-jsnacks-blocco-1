// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero. Se è dispari inseriscilo nell’array


const contenitore = [];
const richieste = 6;

for (let x = 0; x < richieste; x++) {
  
  let numeri = prompt("Inserisci un numero");
  console.log(numeri);


  if (!(numeri % 2)) {
    console.log("Sei pari:", numeri);
    console.log(contenitore);
  } else{
    contenitore.push(numeri);
    console.log("Sei dispari:", numeri);
    console.log(contenitore);
  }
}