// ESERCIZIO 2 : 


const qS = (element) => document.querySelector(element);
const formEl = qS(".form");
const resultEl = qS("#result");
console.log(formEl)
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const value1 = parseFloat(qS("#value1").value);
  const value2 = parseFloat(qS("#value2").value);
  const operator = qS("#operator").value;

  const calculate = (num1, num2, operationFn) => operationFn(num1, num2);

  const operations = {
    sum: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    mult: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
    mod: (num1, num2) => num1 % num2
  };

  const result = calculate(value1, value2, operations[operator]);

  resultEl.textContent = isNaN(result) ? 'Errore' : result;
});




//  ESERCIZIO AVANZATO !!!!!


// const qS = (element) => document.querySelector(element);
// const resultEl = qS("#result");
// const buttons = Array.from(document.querySelectorAll(".number, .operator"));

// let currentOperator = null;
// let firstOperand = null;
// let secondOperand = null;

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const value = button.innerText;
//     if (isNumber(value)) {
//       handleNumberClick(value);
//     } else if (isOperator(value)) {
//       handleOperatorClick(value);
//     } else if (value === "C") {
//       handleClearClick();
//     } else if (value === "=") {
//       handleEqualClick();
//     }
//   });
// });

// function isNumber(value) {
//   return !isNaN(parseFloat(value));
// }

// function isOperator(value) {
//   const operators = ["÷", "×", "-", "+"];
//   return operators.includes(value);
// }

// function handleNumberClick(value) {
//   if (currentOperator === null) {
//     if (firstOperand === null) {
//       firstOperand = value;
//     } else {
//       firstOperand += value;
//     }
//     resultEl.value = firstOperand;
//   } else {
//     if (secondOperand === null) {
//       secondOperand = value;
//     } else {
//       secondOperand += value;
//     }
//     resultEl.value = secondOperand;
//   }
// }

// function handleOperatorClick(operator) {
//   if (firstOperand !== null && secondOperand !== null) {
   
//     calculate();
//   }
//   currentOperator = operator;
// }

// function handleClearClick() {
//   resultEl.value = "result";
//   currentOperator = null;
//   firstOperand = null;
//   secondOperand = null;
// }

// function handleEqualClick() {
//   calculate();
//   currentOperator = null;
// }

// function calculate() {
//   const num1 = parseFloat(firstOperand);
//   const num2 = parseFloat(secondOperand);
//   let result = 0;

//   switch (currentOperator) {
//     case "÷":
//       result = num1 / num2;
//       break;
//     case "×":
//       result = num1 * num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "+":
//       result = num1 + num2;
//       break;
//   }

//   resultEl.value = result;
//   firstOperand = result.toString();
// }

  