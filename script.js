const emailAutorizzate = [
  "simone@gmail.com",
  "massimo@hotmail.com",
  "stefano@icloud.com"
];

// Chiedi all'utente la sua email
const emailInserita = prompt("Inserisci la tua email per accedere:");

let message = ''
let emailVerificate = false
let i = 0;

while (emailVerificate === false){
  if (emailInserita === emailAutorizzate[i]){
    emailVerificate === true
    message = 'L\'email risulta nell\'elenco'
  } else {
    i++;
  }
  if (i === emailAutorizzate.length){
    emailVerificate === true
    message = 'L\'email non risulta nell\'elenco'
  }
}
console.log(message);