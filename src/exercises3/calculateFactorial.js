/**Refactor the different functions below by improving their structure and code quality.

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      var factorial = 1;
      for (var i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  */

function calculateFactorial(n) {
  let mult = 1;
  if (n === 0 || n === 1) return 1;

  for (let num = 2; num <= n; num++) {
    mult *= num;
  }
  return mult;
}

console.log(calculateFactorial(3));
