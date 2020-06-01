/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение


function f(...args) {
    function chtype(el) {
        return typeof el === "number";
    }

    if (args.every(chtype)===false){
        return "error";
    }

   const result = args.reduce(function(sum,current)
        {
            return sum + current;
        });

    return result;

}
console.log(f(5,"a",79,86));
console.log(f(5,79,86));


