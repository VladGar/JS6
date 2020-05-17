// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
 const array = [1, 2, 5, 3, 4];

////////////////// Решение //////////////////
let sum = 0;
for (const value of array){

    sum = sum + (value % 2 === 0 ? value : 0);

}
console.log(sum);