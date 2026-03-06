let compteur = 0;

let a1 = 0 == "";
let b1 = 0 === "";
console.log('0 == "" -> ' + a1 + ' | 0 === "" -> ' + b1);
if (a1 && !b1) compteur++;

let a2 = 0 == "0";
let b2 = 0 === "0";
console.log('0 == "0" -> ' + a2 + ' | 0 === "0" -> ' + b2);
if (a2 && !b2) compteur++;

let a3 = 0 == false;
let b3 = 0 === false;
console.log('0 == false -> ' + a3 + ' | 0 === false -> ' + b3);
if (a3 && !b3) compteur++;

let a4 = "" == false;
let b4 = "" === false;
console.log('"" == false -> ' + a4 + ' | "" === false -> ' + b4);
if (a4 && !b4) compteur++;

let a5 = null == undefined;
let b5 = null === undefined;
console.log('null == undefined -> ' + a5 + ' | null === undefined -> ' + b5);
if (a5 && !b5) compteur++;

let a6 = null == false;
let b6 = null === false;
console.log('null == false -> ' + a6 + ' | null === false -> ' + b6);
if (a6 && !b6) compteur++;

let a7 = NaN == NaN;
let b7 = NaN === NaN;
console.log('NaN == NaN -> ' + a7 + ' | NaN === NaN -> ' + b7);
if (a7 && !b7) compteur++;

let a8 = 1 == "1";
let b8 = 1 === "1";
console.log('1 == "1" -> ' + a8 + ' | 1 === "1" -> ' + b8);
if (a8 && !b8) compteur++;

let a9 = " \t\n " == 0;
let b9 = " \t\n " === 0;
console.log('" \\t\\n " == 0 -> ' + a9 + ' | " \\t\\n " === 0 -> ' + b9);
if (a9 && !b9) compteur++;

console.log("---");
console.log(compteur + ' paire(s) où == et === donnent des résultats différents');