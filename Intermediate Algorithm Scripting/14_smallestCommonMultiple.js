// * Smallest Common Multiple -> Mencari KPK Dari 1 sampai 5
function kpk(a, b) {
    return (a / fpb (a, b)) * b
}

function fpb(a, b) {
   return b == 0 ? a : fpb(b, a % b)
}

function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr)
    for (let i = min; i <= max; i++) {
        min = kpk(i, min)
    }
    return min;

}
console.log(smallestCommons([1,5]))
console.log(kpk(3,4))
console.log(fpb(36,612))