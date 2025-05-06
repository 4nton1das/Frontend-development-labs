function findCommonElements(arr1, arr2) {
    // Создаем Set из второго массива для быстрой проверки
    const set2 = new Set(arr2);
    // Убираем дубликаты в первом массиве и фильтруем общие элементы
    const common = [...new Set(arr1)].filter(item => set2.has(item));
    // Выводим каждый элемент в отдельной строке
    common.forEach(element => console.log(element));
}

// Пример использования
findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);

findCommonElements(['R', 'u', 's', 's', 'i', 'a'],
    ['R', 'u', 't']);
