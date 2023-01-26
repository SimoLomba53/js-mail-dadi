const inputMail=document.getElementById("inputmail");
console.log(inputMail);

let variousMail=[
    "giovannirossi3@gmail.com",
    "andreasorbillo2@gmail.com",
    "alexbinando1@gmail.com",
    "giuliocesare@yahoo.it",
    "alicecastello16@yahoo.it"
]

for (let i=0;i < variousMail.length;i++){
    const currentMail=variousMail[i];
    console.log(currentMail);
    
    if(i>currentMail ==0){
        const insertMail=("Accesso abilitato");
        console.log(insertMail);
    }else{
        const wrongMail=("Accesso negato");
        console.log(wrongMail);
    }


}

