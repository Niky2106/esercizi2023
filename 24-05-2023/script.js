//  ESERCIZIO AVANZATO 

const libro = {
    titolo: "La rosa bianca",
    autore: "Paolo Chezzi",
    anno: 1998
};

// Destructuring delle proprietà dell'oggetto libro
const { titolo, autore, anno } = libro;

console.log("Il titolo del libro : " + titolo);
console.log("L'autore : " + autore);

if (libro.hasOwnProperty("anno")) {
    // Valore dell'anno di pubblicazione
    console.log(libro.anno);
} else {
    libro.anno = "Non specificato";
    //  Non specificato :
    console.log(libro.anno);
}





// Il codice senza destructuring nell'array persona :
let persona = ["Mario", "Rossi", "Italia"];


// Destructuring degli elementi dell'array persona
let [nome, cognome, paese] = persona;


console.log("Il nome è  :" + nome);
console.log("Il cognome è  :" + cognome);

if (persona.length >= 3) {
    console.log(persona[2]);
} else {
    persona.push("Non specificato");
    console.log(persona[2]);
}