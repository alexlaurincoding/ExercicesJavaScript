//Écrivez un programme JavaScript pour vérifier deux nombres donnés et renvoyez true si l'un des nombres est 50 ou si leur somme est 50.

let verifier = (a,b) => {
    let res = false;
    if(a===50 || b === 50 || a+b === 50){
        res = true;
    }
    console.log(res);
}

verifier(26,24);
verifier(50, 46);
verifier(41, 50);
verifier(1,2);
verifier(25,26);
