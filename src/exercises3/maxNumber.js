/** Refactor the different functions below by improving their structure and code quality.

function maxNumber(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else {
      if (b > a && b > c) {
        return b;
      } else {
        return c;
      }
    }
  }
  */
function maxNumber(a, b, c) {
  return Math.max(a, b, c);
}
