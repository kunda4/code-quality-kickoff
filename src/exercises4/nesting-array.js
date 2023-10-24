/**
Write a function(s) that checks the level of nesting of an array. Then, 
use that function to flatten the array into a single-dimensional array.
*/

function nestingArray(array) {
  return array.flat(2);
  // return array.length;
}

console.log(nestingArray([[1, 2, 3], [[[[1, 2, 3]]]]]));
