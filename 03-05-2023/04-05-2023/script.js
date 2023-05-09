/* Esercizio 1 */

function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(myArray);
  
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
  
  /* Esercizio 2 */
  
  const numbers = [10, 5, 8, 3, 6];
  
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  console.log("Valore minimo:", min); // Output: 3
  console.log("Valore massimo:", max); // Output: 10