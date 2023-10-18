/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (password === null) return 0;
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  const consectiveChar = password.match(/([a-zA-Z0-9])\1+/g);

  if (!consectiveChar) return 0;

  return consectiveChar.reduce((sum, curr) => {
    if (curr.length > 2) return sum + 2;
    return sum + 1;
  }, 0);
}
