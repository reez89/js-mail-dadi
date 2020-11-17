//** Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.*/ 

var mailList = ["pincopallo@gmail.com","ginogino@gmail.com"];
var userMail = prompt("Insert your Email");

if (userMail === mailList[0] || userMail === mailList[1] ){
    console.log("You can enter the website");
}else{
    console.log("You need to register to our website");
}

