//Écrivez une fonction JavaScript qui prendra un tableau de nombres stockés et trouvera respectivement le deuxième plus petit et le deuxième plus grand nombre.
let tableau = [5,9,52,18,49,61,100,79,12,66];

let trouverNombres = (tab) => {
    tab.sort(function(a, b){return a-b});
    //console.log(tab);
    console.log(`Le deuxieme plus petit est : ${tab[1]}`)
    console.log(`Le deuxieme plus grand est : ${tab[tab.length -2]}`)
}

trouverNombres(tableau);