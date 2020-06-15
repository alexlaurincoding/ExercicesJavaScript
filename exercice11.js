//Écrivez une fonction JavaScript pour extraire des caractères uniques d'une chaîne.
// Example string : "thequickbrownfoxjumpsoverthelazydog" Expected Output : "thequickbrownfxjmpsvlazydg

let enleverDoublons = (chaine) => {
    for (let i = 0; i<chaine.length-1; i++){
        for(let j = i+1; j<chaine.length; j++){
           if(chaine[i]===chaine[j]){
              chaine = chaine.slice(0, j) + chaine.slice(j+1, chaine.length);
           }
        }
    }
    console.log(chaine);
}

enleverDoublons("thequickbrownfoxjumpsoverthelazydog");