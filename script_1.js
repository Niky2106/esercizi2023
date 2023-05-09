
// PRIMO ESERCIZIO : 



// const button = document.getElementById("myButton");
// const textElement = document.getElementById("myText");

// button.addEventListener("click", function() {
//    textElement.innerHTML = "Hello World";
//   });



  // SECONDO ESERCIZIO : 


    // const form = document.getElementById("myForm");
    // const input = document.getElementById("myInput");
    // const button = document.getElementById("myButton");
    // const textElement = document.getElementById("myText");

    // form.addEventListener("submit", function(event) {
    //   event.preventDefault(); 
    //   const userInput = input.value;
    //   // Visualizziamo il valore nell'elemento di testo
    //   textElement.textContent = userInput;
    //   input.value = "";
    // });




// ESERCIZIO AVANZATO: 


document.addEventListener("DOMContentLoaded", function() {
  var aggiungiButton = document.getElementById("aggiungiButton");
  aggiungiButton.addEventListener("click", aggiungiElemento);

  function aggiungiElemento() {
    var input = document.getElementById("inputElemento");
    var valoreInput = input.value;

    if (valoreInput !== "") {
      var lista = document.getElementById("listaElementi");
      var nuovoElemento = document.createElement("li");
      nuovoElemento.textContent = valoreInput;
      lista.appendChild(nuovoElemento);
      input.value = "";
    }
  }
});

    