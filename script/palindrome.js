"use strict";

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

console.log("ES STRINGA PALINDROMA");
// inizializzazione con prompt
const word = prompt("Inserisci una parola");    //! assunzione: utente non lascia mai null
// chiamata di funzione per verificare se la stringa passata come parametro è palindroma
// e salvo il valore ritornato in una variabile
let result = isPalindrome(word); //* funzione cheatcode
// output
console.log("Cheatcode:");
if (result) {
  console.log(word + " is palindrome");
} else {
  console.log(word + " is not palindrome");
}

result = isPalindrome2(word); //* con two pointers
// output
console.log("Two pointers:");
if (result) {
  console.log(word + " is palindrome\n");
} else {
  console.log(word + " is not palindrome\n");
}


//* FUNCTIONS
/**
 * cheatcode
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  str = str.toLocaleLowerCase(); //metto in minuscolo tutti i caratteri
  return str === str.split("").reverse().join("");
  //split("") mi converte la stringa in un array con valori i caratteri della stringa
  //reverse() mi gira al contrario i valori dell'array
  //join("") mi prende i valori dell'array e li inserisce in ordine in una stringa senza spaziature
  //ritorna true se la stringa è uguale alla stringa stessa girata al contrario
}

/**
 * two pointers method
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome2(str) {
  let left = 0;
  let right = str.length - 1;
  let isPalindrome = true;
  while (left < right && isPalindrome) {
    if (str[left] !== str[right]) {
      isPalindrome = false;
    } else {
      left++;
      right--;
    }
  }
  return isPalindrome;
}
