function isMagicMatrix(matrix) {
    const n = matrix.length;
    const expectedSum = matrix[0].reduce((sum, num) => sum + num, 0); // Сумма первой строки

    // Проверка сумм строк
    for (let i = 1; i < n; i++) {
      const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
      if (rowSum !== expectedSum) {
        return false;
      }
    }

    // Проверка сумм столбцов
    for (let j = 0; j < n; j++) {
      let colSum = 0;
      for (let i = 0; i < n; i++) {
        colSum += matrix[i][j];
      }
      if (colSum !== expectedSum) {
        return false;
      }
    }

    return true;
  }

console.log(isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(isMagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(isMagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
