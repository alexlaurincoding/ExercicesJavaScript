/*Écrivez un programme JavaScript pour construire le modèle suivant, en utilisant une boucle imbriquée for.
*
* *
* * *
* * * *
* * * * *
*/

let triangle = () => {
    for(let i = 1; i <= 5; i++){
        let aff = "";
        for (let j = 0; j<i; j++){
            aff += "* ";
        }
        console.log(aff);
    }
}

triangle();