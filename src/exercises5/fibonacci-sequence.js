//Implement a JavaScript function to calculate the Fibonacci sequence up to a given number

function FibonacciSequence(n) {
  if (n <= 1) return n;
  return FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
}
