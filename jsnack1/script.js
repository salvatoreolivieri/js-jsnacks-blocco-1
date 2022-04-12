
const number1 = prompt("Inserisci un numero a scelta");
console.log("Primo numero selezionato: ", number1);

const number2 = prompt("Per favore inseriscine un altro");
console.log("Secondo numero selezionato: ",number2);


if (number1 > number2){
  console.log("Ecco il numero più grande: ", number1);
} else {
  console.log("Ecco il numero più grande: ", number2);
}