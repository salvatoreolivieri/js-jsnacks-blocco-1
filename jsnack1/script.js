/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const number1 = parseInt(prompt("Inserisci un numero a scelta"));
console.log("Primo numero selezionato: ", typeof number1, number1);

const number2 = parseInt(prompt("Per favore inseriscine un altro"));
console.log("Secondo numero selezionato: ", typeof number2, number2);


if (number1 > number2){
  console.log("Ecco il numero più grande: ", typeof number1, number1);
} else {
  console.log("Ecco il numero più grande: ", typeof number2, number2);
}