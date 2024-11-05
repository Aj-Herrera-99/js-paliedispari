"use strict";

/**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

// inizializzazione con prompt e dichiarazioni
let choiceUser = prompt("Scegli pari o dispari");

const numberUser = numberFromPromptWithRange(1, 5);
const numberBot = getRndInteger(1, 5);

const sum = numberUser + numberBot;

console.log(`
    Scelta dell'utente: ${choiceUser}
    Numero dell'utente: ${numberUser}
    Numero del bot: ${numberBot}
    Somma dei due numeri: ${sum}
    `)

choiceUser = choiceUser.toLocaleLowerCase();
switch(choiceUser){
    case "pari":
        if(isEven(sum)){
            console.log("Hai vinto!!");
        } else {
            console.log("Hai perso! :(");
        }
        break;
    case "dispari":
        if(!isEven(sum)){
            console.log("Hai vinto!!");
        } else {
            console.log("Hai perso! :(");
        }
        break;
    default:
        console.log("Non hai scelto nè pari nè dispari");
}
//*//////////////////////////// */
function numberFromPromptWithRange(min, max){
    let num = Math.floor(parseInt(prompt(`Inserisci un numero da ${min} a ${max}`)));
    //? controllo sull'input: num dev essere un numero compreso tra 1 e 5
    while(isNaN(num) || !(num >= min && num <= max)){
        num = Math.floor(parseInt(prompt(`NON VALIDO. INSERISCI UN NUMERO VALIDO DA ${min} A ${max}`)));
    }
    return num;
}

function isEven(num){
    return num % 2 === 0;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }