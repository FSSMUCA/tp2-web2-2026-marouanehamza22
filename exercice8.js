let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

nom = nom.trim();
if(nom === ""){
nom = "Inconnu";
}
console.log('nom : "' + nom + '" (corrigé : espaces supprimés)');

age = parseInt(age);
if(Number.isNaN(age) || age <= 0){
console.log("age : valeur invalide");
}else{
console.log("age :",age,"(valide)");
}

let emailValide = false;
let posAt = email.indexOf("@");
let posDot = email.indexOf(".",posAt);

if(posAt !== -1 && posDot !== -1){
emailValide = true;
}

console.log('email : "'+email+'" ('+(emailValide?"valide":"invalide : pas de point après @")+")");

let score = parseInt(scoreJeu);
if(Number.isNaN(score)){
score = 0;
}
console.log("scoreJeu :",score,'(extrait depuis "'+scoreJeu+'")');

let admin = estAdmin === "true";
console.log("estAdmin :",admin,'(attention : Boolean("false") = true)');

let derniere = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion : "'+derniere+'" (valeur par défaut via ??)');

let connexions = Number(nombreConnexions);
if(connexions === 0){
console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
}else{
console.log("nombreConnexions :",connexions);
}

console.log("================================");