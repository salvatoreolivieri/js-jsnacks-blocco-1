//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const elenco_invitati = ["Mario", "Giorgio", "Carlo", "Adele" ]


for (let index = 0; index < elenco_invitati.length; index++) {

  let ospite = prompt ("Come ti chiami?");

  if (!(ospite === elenco_invitati[index])) {
    console.log("Mi dispiace, non sei in lista")
  } else{
    console.log("Benvenuto, sei in lista");
  }

}