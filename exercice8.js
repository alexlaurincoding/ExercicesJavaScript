//Écrivez un programme JavaScript pour aplatir un tableau imbriqué (n'importe quelle profondeur). Si vous passez un vrai en plus, le tableau ne sera aplati que d'un seul niveau.
// Sample Data: console.log(flatten([1, [2], [3, [[4]]],[5,6]])); [1, 2, 3, 4, 5, 6] console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); [1, 2, 3, [[4]], 5, 6]

let aplatir = (tableau, unNiveau = false) => {
    let resultat;
    if (unNiveau === true){
        //resultat = [].concat.apply([], tableau);
        resultat = tableau.flat();
    }else{
         resultat = tableau.flat(Infinity);
    }
    console.log(resultat);
}

aplatir([1, [2], [3, [[4]]],[5,6]],true);
aplatir([1, [2], [3, [[4]]],[5,6]]);