function sumDigits(number) {
    let sum = 0;
    String(Math.abs(number)).split('').forEach(digit => sum += parseInt(digit));
    return sum;
  }

console.log(sumDigits(245678));
console.log(sumDigits(97561));
console.log(sumDigits(543));
console.log(sumDigits(-123));
