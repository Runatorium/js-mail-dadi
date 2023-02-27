let rngnumbers1 = [];
let rngnumbers2 = [];
let sum1 = 0;
let sum2 = 0;


for(i=0; i<12; i++){
    if(i<6){
        const randomnumber = Math.floor(Math.random() * 6) + 1;
        rngnumbers1.push(randomnumber);
        sum1 += rngnumbers1[i]; 
    }else{
        const randomnumber = Math.floor(Math.random() * 6) + 1;
        rngnumbers2.push(randomnumber); 
        sum2 += rngnumbers2[i-6];
    }
}
console.log(sum1);
console.log(sum2);
console.log(rngnumbers1);
console.log(rngnumbers2);

if(sum1 < sum2){
    console.log('vince il computer');

}else if(sum1 > sum2){
    console.log('vince il giocatore');
}else{
    console.log('pareggio');
}