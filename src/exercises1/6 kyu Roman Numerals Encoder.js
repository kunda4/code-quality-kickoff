function solution(number) {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Initialize an empty string to store the Roman numeral
  let romanNumeral = "";

  // Iterate through the symbols and values
  for (let i = 0; i < symbols.length; i++) {
    while (number >= values[i]) {
      romanNumeral += symbols[i];
      number -= values[i];
    }
  }

  return romanNumeral;
}
console.log(solution(34));
