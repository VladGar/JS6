// У вас есть массив с элементами в виде положительных чисел.
// Найдите сумму таких элементов массива.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
 const array = [2, -1, -3, 15, 0, 4];

////////////////// Решение //////////////////
let sum = 0;
for (let i of array) {
    if (i>0) {
        sum = sum + i;
    }
}
console.log(sum);