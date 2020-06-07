/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
// result.map()


 // [ x, x, x, x, x ]


const createArray = function (a, b) {
if (typeof a !== 'number' && typeof a !== 'string' && typeof a !== 'object' && !Array.isArray(a) && typeof b !== 'number' ) {
        const n = Number(b) ;
const resultAr = [];
    for (let i = 1; i <= n; i++) {
    resultAr.push(a);
    }
    return resultAr;
}};
exports.createArray = createArray;
const result = createArray(true, '5');
console.log(result);