/*
    Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object  link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
String.prototype.split()   link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Array.prototype.reverse()   link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Array.prototype.join()      link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

*/

// There are three methods being called upon on the str parameter that's passed into the reverseString funciton
// split, reverse, join all do exactly as they sound and can be chained together to complete the function
// If you didn't know about chaining, you might think to create a variable and turn the return statement into 3 separate actions

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");