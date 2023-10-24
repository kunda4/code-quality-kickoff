//Write a JavaScript function to check if a given number is prime or not

function primeNumber(number) {
  for (let divisor = 2; number > divisor; divisor++) {
    if (number % divisor === 0) return false;
  }
  return true;
}
console.log(primeNumber(68));
