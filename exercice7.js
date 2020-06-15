//Écrivez un programme JavaScript pour trouver l'élément le plus fréquent d'un tableau.
// Sample array: const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output: a ( 5 times )

const ARR1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 3, 3, 'a', 2, 4, 9, 3]
const ARR2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let trouverFrequence = (tab) =>{
    tab.sort();
    let freq =1;
    let res = [0,0];
    for(let i =0; i<tab.length-1; i++){
        if(tab[i]===tab[i+1]){
            freq++;
            if(freq>res[1]){
                res = [tab[i], freq];
            }
        }else{
            freq=1;
        }
    }
    console.log(`${res[0]} (${res[1]} times)`);
}

trouverFrequence(ARR1);
trouverFrequence(ARR2);