
const randomnumber1 = Math.floor(Math.random() * 6) + 1;
const randomnumber2 = Math.floor(Math.random() * 6) + 1;

if(randomnumber1<randomnumber2){
    console.log('vince il giocatore')
}else if(randomnumber2<randomnumber1) {
    console.log('vince il computer')
}else{
    console.log('pareggio')
}