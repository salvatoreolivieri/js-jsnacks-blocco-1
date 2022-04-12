/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


const request_limit = 5;

let somma_numeri = 0;

for (let x = 0; x < request_limit; x++){

  let user_input = parseInt(prompt("Inserisci un numero"));
  console.log(user_input);

  somma_numeri += user_input;

}

console.log(somma_numeri);



