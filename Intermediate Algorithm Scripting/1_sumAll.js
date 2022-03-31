// * SUM ALL ARRAY => Menjumlah semua element pada array
// * CARA 1
function sumAll(arr) {
    let total = 0 
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
     total += i
    }
    return total
  }
  
console.log(sumAll([5, 10]));
// Output 5+6+7+8+9+10 = 45


// * CARA 2
function sumAll(arr) {
    let total = 0
    arr.sort((a, b) => a - b)
    for (let i = arr[0]; i <= arr[1]; i++) {
     total += i
    }
    return total
  }
  
console.log(sumAll([4, 1]));
// Output 4+3+2+1 = 10