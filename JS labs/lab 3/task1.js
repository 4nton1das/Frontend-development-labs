function processArray(arr) {
    // Сумма исходного массива
    const originalSum = arr.reduce((acc, num) => acc + num, 0);

    // Создание нового массива
    const newArray = arr.map((num, index) => {
        return num % 2 === 0 ? num + index : num - index;
    });

    // Сумма измененного массива
    const newSum = newArray.reduce((acc, num) => acc + num, 0);

    console.log(newArray);
    console.log(originalSum);
    console.log(newSum);
}

processArray([5, 15, 23, 56, 35]);
processArray([-5, 11, 3, 0, 2]);
