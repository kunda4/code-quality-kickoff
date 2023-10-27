function decimalToBinary(number) {
  let binary = "";

  if (number === 0) {
    return "0";
  }

  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}
