//COLLEGO IL BOTTONE E FACCIO SI CHE VENGA VISUALIZZATO IN CONSOLE
//GLI DO UNA FUNZIONE
//INDIVIDUO DOVE VIENE INSERITA LA MAIL
//INDICO CON ARRAY LE VARIE MAIL
//CON FOR INDICO DOVE DEVONO ESSERE CERCATE LE MAIL
//CON LE IF INDICO I COMANDI DA ESEGUIRE IN CASO LA MAIL FOSSE PRESENTE O NO
const buttonGenera=document.getElementById("genera");
console.log(buttonGenera);



buttonGenera.addEventListener(
    'click',
    function(click){
        const inputMail = document.getElementById("inputmail").value;
        console.log("La mail inserita è", inputMail);

        let variousMail = [
            "giovannirossi3@gmail.com",
            "andreasorbillo2@gmail.com",
            "alexbinando1@gmail.com",
            "giuliocesare@yahoo.it",
            "alicecastello16@yahoo.it"
        ]

        for (let i=0;i < variousMail.length;i++){
        console.log(variousMail[i]);

        if (i==inputMail){
             const rightmail=("Accesso consentito");
             console.log(rightmail);
        }else{
            const wrongmail=("Accesso deviato");
            console.log(wrongmail);
        }
        }

    }

);




