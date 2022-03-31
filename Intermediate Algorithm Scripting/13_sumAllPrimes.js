// * Sum All Primes => Menjumlahkan Semua Bilangan Prima
function sumPrimes(num) {
    let result = 0

    for (let i = 1; i <= num; i++) {
        let prime = true;
            for (let j = 2; j < i; j++) {
                if(i % j == 0) {
                    prime = false;
                    break;
                } 
            }
            if(i>1 && prime ){
                result += i
        }
    }
    return result
}

console.log(sumPrimes(10))