function findSmallest(num1, num2, num3) {
    let smallest = num1;
    if (num2 < smallest) {
      smallest = num2;
    }
    if (num3 < smallest) {
      smallest = num3;
    }
    return smallest;
  }

console.log(findSmallest(2, 5, 3));
console.log(findSmallest(600, 342, 123));
console.log(findSmallest(25, 21, 4));
