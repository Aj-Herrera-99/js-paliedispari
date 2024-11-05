"use strict"

let game = prompt(
    `BENVENUTO/A.
    SCEGLI LA MODALITA' DI GIOCO TRA QUELLE DISPONIBILI:
    - palindrome
    - evenOdd`);

game = game.toLocaleLowerCase();

const welcomeText = "Ottimo! Hai scelto: " + game;

switch(game){
    case "palindrome":
        displayText(welcomeText);
        palindrome();
        break;
    case "evenodd":
        displayText(welcomeText);
        evenOdd();
        break;
    default:
        console.log("Gioco inesistente.");
}