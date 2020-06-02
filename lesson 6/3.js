/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */
// Решение

const filter = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};
    const strs = ['Hello', ',', 'JavaScript', 'World', '!'];

const data = filter(strs, function(str) {
    return str.toLowerCase() !== str;
});

console.log(data);