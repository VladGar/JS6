/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
//
// isEven(3); // false
// isEven(4); // true
//
// exports.isEven = isEven;
//
function isEven(a) {
    function chtype(a) {
        return typeof a === "number";
    }
    if (chtype(a)=== false)
    {
        return "error"
    }

    return (a % 2 === 0)
}

console.log(isEven(4));