/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function  f(a,b,c) {
    function chtype(el) {
        return typeof el === "number";

    }
    if (
        (chtype(a)===false)
        ||(chtype(c)===false)
        ||(chtype(b)===false)
        )
    {
        return "error";
    }

    return (a - b / c);
}

console.log(f(4, 5, 6));
console.log(f(4, "a", 6));


