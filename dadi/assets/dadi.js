//** DICHIARO ALL'INTERNO DI UN ARRAY I VALORI COMPRESI TRA 1 E 6 CHE ENTRAMBE LE MIE VARIABILI DEVONO AVERE */

var elUser = [1,2,3,4,5,6];
var elPc = [1,2,3,4,5,6];
var resultUser
var resultPc


//** CON LA PROPRIETA' MATH RANDOM VADO A GENERARE DEI NUMERI CASUALI, PESCATI DIRETTAMENTE DAGLI ARRAY DICHIARATI IN PRECEDENZA */
resultUser = Math.floor((Math.random() * elUser.length) + 1);
resultPc = Math.floor((Math.random() * elPc.length) + 1);

console.log(resultUser, resultPc);

//** IN QUESTA FUNZIONE, VADO A CONFRONTARE I RISULTATI OTTENUTI E DI SEGUITO A VISUALIZZARE VINTO, PERSO O PAREGGIO */
if(resultUser > resultPc){
    console.log("YOU WIN!");
}else if(resultUser === resultPc) {
    console.log("EVEN! YOU GOT AN EXTRA RUN!");
}
else{
    console.log("DON'T CRY, YOU LOOSE!");
}