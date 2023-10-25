/**
Write a function(s) that checks the level of nesting of an array. Then, 
use that function to flatten the array into a single-dimensional array.
*/

function NestingArrayLevel(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length === 0) return 1;

  const nestedLevels = array.map((item) => NestingArrayLevel(item));
  const maxLevel = Math.max(...nestedLevels);
  return 1 + maxLevel;
}
function flattenArray(array) {
  const level = NestingArrayLevel(array);

  if (level === 1) return array;

  const flattened = array.flat();
  return flattenArray(flattened);
}
