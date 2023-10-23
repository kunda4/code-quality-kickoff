/** Refactor the different functions below by improving their structure and code quality.

function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  */

const reverseString = (string) => [...string].reverse().join("");
