//Refactor the different functions below by improving their structure and code quality.

function calculateAverage(numbers) {
  return numbers.reduce((sum, curr) => sum + curr) / numbers.length;
}
console.log(calculateAverage([2, 4, 4, 7, 8, 9]));
