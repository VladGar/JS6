/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число в  качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
//
// isPositive(-3); // false
// isPositive(3); // true
//
// exports.isPositive = isPositive;
function isPositive(a) {
    function chtype(a) {
        return typeof el === "number";
    }
    if ((chtype(a)===false))
    {
        return "error"
    }
    if( a > 0) return true;
    if (a < 0) return false;
}
console.log(isPositive(3))