//Implement a JavaScript function to find the sum of all elements in an array recursively.

function sumArray(array) {
  return array.reduce((sum, current) => sum + current, 0);
}
