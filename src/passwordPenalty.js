/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
function penaltyPoints(password = "") {
  if (password === null) return 0;
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  //the line is about grouping repeated char separatedly into an array
  const groupedChar = password.match(/([a-zA-Z0-9])\1+/g);
  if (!groupedChar) return 0;
  let count = 0;
  groupedChar.map((elt) => {
    if (elt.length == 2) return (count += 1);
    if (elt.length > 2) return (count += 2);
  });
  return count;
}
