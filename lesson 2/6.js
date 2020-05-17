// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
 const array = [1, 2, 3, 4];

////////////////// Решение //////////////////

let sum = 0;
for (const value of array){
    sum = sum + value;
}

console.log(sum);

let sum2 = 0;
for (var prop in array) {
    sum2 = sum2 + array[prop];
}
console.log(sum2);