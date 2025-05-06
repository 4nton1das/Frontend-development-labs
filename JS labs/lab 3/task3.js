function rotateArray(arr, rotations) {
    const n = arr.length;
    rotations = rotations % n; // Нормализуем вращения

    const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
