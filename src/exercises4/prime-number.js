//Write a JavaScript function to check if a given number is prime or not

function primeNumber(number) {
  let divisor = 2;
  while (number > divisor) {
    if (number % divisor === 0) return false;
    divisor++;
  }
  return true;
}
