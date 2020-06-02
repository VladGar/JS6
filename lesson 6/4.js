/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

 const array = [1, 2, 3, 4, 5, 6];
// const result = every(array, (element, index, arrayRef) => {
//     console.log(`${index}:`, element, arrayRef);
//
//     return typeof element === 'number';
// });
//
// console.log(result); // true
//
// exports.every = every;
// Решение
const CFA = function (arr) {
    if (!Array.isArray(array)) {
        return "error"
    }
    if (typeof arr !== "function") {
        return "error"
    }
};
const some = function arr (arr, callback, array) {
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(array, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};
console.log(some());

