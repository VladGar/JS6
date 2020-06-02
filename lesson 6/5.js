/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */
 const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];
//
// const result = some(array, (element, index, arrayRef) => {
//     console.log(`${index}:`, element, arrayRef);
//
//     return typeof element === 'string';
// });
//
// console.log(result); // true
//
// exports.some = some;
// Решение
const CFA = function (arg) {
    if (!Array.isArray(array)) {
        return "error"
    }
    if (typeof every !== "function") {
        return "error"
    }
};
let every = function arg (arr, callback, array) {
    let i, length = array.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(array, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};
console.log(every());