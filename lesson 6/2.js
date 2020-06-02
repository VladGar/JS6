/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */


// Решение
const CFA = function (arg) {
    if (!Array.isArray(arg)) {
        return "error"
    }
    if (typeof arg !== "function") {
        return "error"
    }
};
let each = function(arr, callback, thisArg) {
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
    }
};
each([1, 2, 3], function(num, i, nums) {
    console.log('Number: ' + num + ', index: ' + i + ',', nums)
});