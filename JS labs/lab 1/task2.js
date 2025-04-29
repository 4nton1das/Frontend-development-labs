function roundAndFormat(number, precision) {
    precision = Math.min(precision, 15);
    const roundedNumber = number.toFixed(precision);
  
    const formattedNumber = parseFloat(roundedNumber);
  
    return formattedNumber;
  }

console.log(roundAndFormat(3.141592653589793, 2));
console.log(roundAndFormat(3.141592653589793, 5));
console.log(roundAndFormat(10.0000, 3));
console.log(roundAndFormat(2.5, 0));
console.log(roundAndFormat(2.4, 0));
