// * DESTROY -> Mengambil element yang tidak diinginkan (in this case : 2,3)
function destroyer(arr, ...destroy) {
    return arr.filter(el => !destroy.includes(el));
  }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// Output [1,1]