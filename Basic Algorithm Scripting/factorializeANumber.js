/*
Factorialize a Number 
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


Here are some helpful links:

Arithmetic Operators   link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

*/

function factorialize(num) {
 var calculate = num;
    if (num > 0) {
       for (var i = num - 1; i > 0; i--){
         calculate = calculate * i;
       }
      return calculate;
    }
  return 1;
}

factorialize(5); //answer: 120