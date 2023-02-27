const mailist = ['prova@gmail.com','prova2@gmail.com','prova3@gmail.com'];
let arraylenght = mailist.length;
let mailtocheck = prompt('inserisci la tua mail');
console.log(arraylenght);
let flag = 0;


for(i=0; i<arraylenght; i++){
    if(mailtocheck === mailist[i]){
        flag++;
    }
}

console.log(flag);

if(flag<1){
    console.log('la mail non è presente nel database')
}else{
    console.log('la mail è presente nel database')
}