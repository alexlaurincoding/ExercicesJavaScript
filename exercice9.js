//Écrire une fonction JavaScript qui inverse un nombre. Sample Data and output: Example x = 32243; Expected Output: 34223

let inverser = (nombre) => {
    let nombreInverser = parseFloat(nombre.toString().split('').reverse().join(''))
    console.log(nombreInverser);
}

inverser(12345678);