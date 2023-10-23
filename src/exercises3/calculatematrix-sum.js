/** Refactor the different functions below by improving their structure and code quality.

function calculateMatrixSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++)
      for (var j = 0; j < matrix[i].length; j++)
        sum += matrix[i][j];
    return sum;
  }
  */

function calculateMatrixSum(matrix) {
  var sum = 0;
  for (let index = 0; index < matrix.length; index++)
    for (let index_ = 0; index_ < matrix[index].length; index_++)
      sum += matrix[index][index_];
  return sum;
}
