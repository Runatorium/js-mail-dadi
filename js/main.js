const mailist = ['prova@gmail.com','prova2@gmail.com','prova3@gmail.com'];
let arraylenght = mailist.length;
let mailtocheck = prompt('inserisci la tua mail');
console.log(arraylenght);


for(i=0; i<arraylenght; i++){
    if(mailtocheck === mailist[i] ){
        console.log('mail presente nel database');
        break
    }else{
        console.log('mail non presente nel database');
    }
}