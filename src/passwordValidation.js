export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  // check if there is less than 4 distanct character
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size <= 3) return false;

  if (forbiddenPasswords.includes(password)) return false;

  if (password.length !== 10) return false;

  // check if password has special character
  if (/[^a-zA-Z0-9]/.test(password)) return false;

  // check if password has at least one upperCase character or lowerCase character or one digit
  if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  )
    return false;
  // check if there is no ascending or descending order
  if (
    /(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)/.test(
      password
    )
  )
    return false;
  return true;
}
