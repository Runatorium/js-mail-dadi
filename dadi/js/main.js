let rngnumbers1 = [];
let rngnumbers2 = [];

for(i=0; i<12; i++){
    if(i<6){
        const randomnumber = Math.floor(Math.random() * 6) + 1;
        rngnumbers1.push(randomnumber);  
    }else{
        const randomnumber = Math.floor(Math.random() * 6) + 1;
        rngnumbers2.push(randomnumber); 
    }
}

console.log(rngnumbers1);
console.log(rngnumbers2);