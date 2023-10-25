//Implement a JavaScript function to find the sum of all elements in an array recursively.

function sumArray(array, index = 0) {
  if (array.length === index) return 0;

  let sum = sumArray(array, index + 1);

  return sum + array[index];
}
