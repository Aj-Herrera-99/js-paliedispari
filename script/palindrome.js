"use strict";

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

console.log("ES STRINGA PALINDROMA");
// inizializzazione con prompt
const word = prompt("Inserisci una parola");
// chiamata di funzione per verificare se la stringa passata come parametro è palindroma
// e salvo il valore ritornato in una variabile
const result = isPalindrome(word);
// output
if(result){
    console.log(word + " is palindrome");
} else {
    console.log(word + " is not palindrome");
}
console.log("\n");

//* FUNCTIONS
/**
 * 
 * @param {string} str 
 * @returns {Boolean}
 */
function isPalindrome(str){
    str = str.toLocaleLowerCase();          //metto in minuscolo tutti i caratteri
    return str === str.split("").reverse().join(""); 
    //split("") mi converte la stringa in un array con valori i caratteri della stringa
    //reverse() mi gira al contrario i valori dell'array
    //join("") mi prende i valori dell'array e li inserisce in ordine in una stringa senza spaziature
    //ritorna true se la stringa è uguale alla stringa stessa girata al contrario
}
