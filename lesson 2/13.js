// Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
// Использовать встроенные методы массивов — нельзя.
let num = 0;
let n = 1000;
while (n>50) {
   n = n / 2;
    num = num + 1;


}

console.log('Число от деления на два - ' + n.toString() + '. Количество проходов - ' + num.toString());
