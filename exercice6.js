//Écrivez une fonction JavaScript pour obtenir le premier élément d'un tableau. Le passage d'un paramètre 'n' renverra les premiers 'n' éléments du tableau.
let tableau = [5,9,52,18,49,61,100,79,12,66];

let renvoiElements = (tab, n=1) =>{
    let res = [];
    for(let i = 0; i<n; i++){
        res.push(tab[i])
    }
    console.log(res);
}

renvoiElements(tableau, 3);
renvoiElements([7, 9, 0, -2]);
renvoiElements([],3);
renvoiElements([7, 9, 0, -2],3);
renvoiElements([7, 9, 0, -2],6);
renvoiElements([7, 9, 0, -2],-3);
