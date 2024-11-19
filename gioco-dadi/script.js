const giocatore = Math.ceil(Math.random() * 6)
const computer = Math.ceil(Math.random() * 6)

console.log('Il numero giocatore uscito è' ,giocatore );
console.log('Il numero computer uscito è' ,computer);

if (giocatore > computer){
  messaggio = 'HAI VINTO'
} else if (giocatore < computer){
  messaggio = 'HAI PERSO'
} else {
  messaggio = 'HAI PAREGGIATO'
}
console.log(messaggio);