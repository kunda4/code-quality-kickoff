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

// function calculateFactorial(n) {
//   if (n < 2) return 1;

//   for (let number = 2; number <= n; number++) {
//     let multplication = 1;
//     multplication *= number;
//   }
//   return multplication;
// }

// using recursive function

function calculateFactorial(n) {
  if (n < 2) return 1;

  let factorial = calculateFactorial(n - 1);

  return factorial * n;
}

console.log(calculateFactorial(3));
