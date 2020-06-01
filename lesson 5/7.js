/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

// getDivisors(12); // [1, 2, 3, 4, 6, 12]
//
// exports.getDivisors = getDivisors;
function getDivisors(a) {
    function chtype(a) {
        return typeof a === "number";
    }
    if ((chtype(a)===false))
    {
        return "error"
    }
    const arr = []
    for(let i = 1; i<=a; i++ ) {
        arr.push(i)
    }

    const res = []
     arr.forEach(function (el, indx,) {
        if (a % el === 0) res.push(el)
    })

    return res
}

console.log(getDivisors(12));