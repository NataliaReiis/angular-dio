"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 3], [50]);
const stgArray = concatArray(["natt", "reis"], ['piu']);
console.log(numArray);
console.log(stgArray);
