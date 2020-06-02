const reduce = function(ars, callback, firstVal) {
    let i, length = ars.length, resu = firstVal;
    for (i = 0; i < length; i = i + 1) {
        resu = callback.call(null, resu, ars[i], i, ars);
    }
    return resu;
};
const ar = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
let Res = reduce(ar, function(resu, cur) {
    return resu.concat(cur);
}, []);
console.log(Res);




















