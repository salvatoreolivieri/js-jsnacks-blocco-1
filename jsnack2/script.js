/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/


const word1 = prompt("Inserisci una parola a tua scelta");
console.log("Ecco la prima parola che è stata scritta: ", word1);

const word2 = prompt("Inserisci un'altra parola");
console.log("Ecco la seconda parola che è stata scritta: ", word2);


if (word1.length > word2.length){
  console.log("Ecco la parola più corta: ", word2);
  console.log("Ecco invece l'altra parola: ", word1);
} else{
  console.log("Ecco la parola più corta: ", word1);
  console.log("Ecco invece l'altra parola: ", word2);
}
