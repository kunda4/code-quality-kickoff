/**Refactor the different functions below by improving their structure and code quality.

function findEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
*/

const findEvenNumbers = (numbers) => numbers.filter((el) => el % 2 === 0);
