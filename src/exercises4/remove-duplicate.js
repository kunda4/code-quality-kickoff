//Implement a JavaScript function to remove duplicate elements from an array

function removeDuplicate(array) {
  return new Set(array);
}

console.log(removeDuplicate([1, 2, 3, 4, 3, 4, 4, 5, 6, 7]));
