// * SUM ALL FIBONACCI -> Menjumlahkan semua bilangan fibonacci yang GANJIL
function sumFibs(num) {
    // return num;
    let f0 = 0, f1 = 1, next;
    result = []
    for (let i = 1; i <= num; i++) {
        if(f1 % 2 === 1 && f1 <= num) {
            result.push(f1)
        }
        next = f0 + f1;
        f0 = f1;
        f1 = next;
    }
    return result.reduce((acc,curr)=> acc + curr)
  }
  
console.log(sumFibs(4));