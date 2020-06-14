//Écrivez un programme JavaScript qui itère les entiers de 1 à 100. Mais pour les multiples de trois, imprimez "Fizz"
// au lieu du nombre et pour les multiples de cinq imprimez "Buzz". Pour les nombres qui sont des multiples de
// trois et cinq, imprimez "FizzBuzz".

let fizz = () =>{
    for (let i = 0; i <= 100; i++){
        let affichage = "";
        if(i%3 === 0 || i%5===0){
            if (i%3 === 0){
                affichage = "Fizz";
            }
            if (i%5===0){
                affichage += "Buzz";
            }
        }else{
            affichage = i;
        }

        console.log(affichage);
    }
}
fizz();