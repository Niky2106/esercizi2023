// 05-05-2023 

  // ESERCIZIO 3: 

//let person = {
    //nome : "Nicoleta",
    //eta: 22,
    //colore : " Bionda",
    //altezza: 1.62,
//};

//console.log("Mi chiamo " + person.nome + " ho " + person.eta + ", sono " + person.colore + " e ho "+ person.altezza + "cm");


// ESERCIZIO AVANZATO :


// function UserNumber() {
   // let numberUser = parseInt(prompt("Inserisci un numero!"));
  //  return numberUser;
  //}
  
  // function checkEvenOrOdd(numberUser) {
    // numberUser % 2 === 0
     // ? console.log("Questo è il numero pari: ", numberUser)
     // : console.log("Questo è il numero dispari: ", numberUser);
  //}
  
  // Chiamate alle funzioni
  //let numberUser = UserNumber();
  
  //checkEvenOrOdd(numberUser)


  // ESERCIZIO 2 : 

  function chiediNumero() {
    return parseInt(prompt("Inserisci un numero!"));
  }
  
  function isPari(numero) {
    return numero % 2 === 0;
  }
  
  function calcola(num1, num2, operatore) {
    let risultato;
    switch (operatore) {
      case "+":
        risultato = num1 + num2;
        break;
      case "-":
        risultato = num1 - num2;
        break;
      case "*":
        risultato = num1 * num2;
        break;
      case "/":
        risultato = num1 / num2;
        break;
      default:
        console.log("Operatore non valido!");
    }
    return risultato;
  }
  
  let numberUser = chiediNumero();
  if (isPari(numberUser)) {
    console.log("Questo è il numero pari: ", numberUser);
  } else {
    console.log("Questo è il numero dispari: ", numberUser);
  }
  
  let numberUserBis = chiediNumero();
  if (isPari(numberUserBis)) {
    console.log("Questo è il numero pari: ", numberUserBis);
  } else {
    console.log("Questo è il numero dispari: ", numberUserBis);
  }
  
  let num1 = Number(prompt("Inserisci il primo numero:"));
  let num2 = Number(prompt("Inserisci il secondo numero:"));
  let operatore = prompt("Inserisci l'operatore desiderato (+, -, *, /):");
  
  console.log(num1 + " " + operatore + " " + num2 + " = " + calcola(num1, num2, operatore));