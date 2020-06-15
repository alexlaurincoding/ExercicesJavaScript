//Écrivez une fonction JavaScript qui accepte une chaîne comme paramètre et compte le nombre de voyelles dans la chaîne.
//
// Remarque: Comme la lettre «y» peut être considérée à la fois comme une voyelle et une consonne, nous ne comptons pas «y» comme voyelle ici.
//
// Sample Data and output: Example string: 'The quick brown fox' Expected Output: 5

let compterVoyelles = (chaine) => {
    let compteur = 0;
    for(let i=0; i<chaine.length; i++){
        if((chaine[i]).toUpperCase() === "A" || (chaine[i]).toUpperCase() === "E" || (chaine[i]).toUpperCase() === "I" || (chaine[i]).toUpperCase() === "O" || (chaine[i]).toUpperCase() === "U" ){
            compteur++;
        }
    }
    console.log(`La chaine de caractere ${chaine} contient ${compteur} voyelles.`);
}

compterVoyelles("The quick brown fox");
compterVoyelles("Comme la lettre «y» peut être considérée à la fois comme une voyelle et une consonne, nous ne comptons pas «y» comme voyelle ici.");