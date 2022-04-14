//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

richieste = parseInt(prompt("Quanti numeri vuoi elevare alla terza?"));

for (let x = 0; x < richieste; x++) {
  console.log(Math.pow((prompt("Inserisci un numero")), 3));
  
}

