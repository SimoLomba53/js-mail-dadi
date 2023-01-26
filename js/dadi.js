//ASSEGNA CASELLE A PC E PLAYER
//DAI A UN BOTTONE LA FUNZIONE
//GENERA 6 NUMERI RANDOM DA 1 a 6
//ASSEGNA 1 NUMERO AL PC E 1 AL GIOCATORE
//STABILISCI CON LE IF IL VINCITORE
const buttonCrea = document.getElementById("creanumeri");
console.log(buttonCrea);

buttonCrea.addEventListener(
    'click',
    function (click) {
        const randomNumberPc = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumberPc);

        const randomNumberPlayer = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumberPlayer);

        const pcInput = document.getElementById("pcnumber");
        console.log(pcInput);
        pcInput.innerHTML=randomNumberPc;
        const playerInput = document.getElementById("playernumber");
        console.log(playerInput);
        playerInput.innerHTML=randomNumberPlayer;


        if(randomNumberPc > randomNumberPlayer){
            const pcWin=("Vince il PC");
            console.log(pcWin);
        }else{
            const playerWin=("Vince il Player");
            console.log(playerWin);
        }

    
        

    }

);
