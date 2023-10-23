/**Refactor the different functions below by improving their structure and code quality.

function calculateAverage(numbers) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      count++;
    }
    var average = sum / count;
    return average;
  }
  */

function calculateAverage(numbers) {
  return numbers.reduce((sum, current) => sum + current) / numbers.length;
}
