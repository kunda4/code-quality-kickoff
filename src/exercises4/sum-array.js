//Implement a JavaScript function to find the sum of all elements in an array recursively.

function sumArray(array, index = 0) {
  if (index === array.length) return 0;

  let sum = sumArray(array, index + 1);

  return sum + array[index];
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
