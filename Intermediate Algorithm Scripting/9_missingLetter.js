// // //  * MISSING LETTERS -> Menemukan Huruf Yang Hilang

// function fearNotLetter(str) {

//     const source = str.split('').map((angka) => angka.charCodeAt(0)) //huruf lengkap
//     console.log(source)
//     const compare = []  //terdapat huruf yg hilang
//     const hurufAwal = str.charCodeAt(0) 
//     const hurufAkhir = str.charCodeAt(str.length - 1)

//     for (let i = hurufAwal; i <= hurufAkhir; i++) {
//         compare.push(i)
//     }

//     let hasil = compare.filter((el) => !source.includes(el))[0];

//     return hasil ? String.fromCharCode : undefined
//   }
  
// console.log(fearNotLetter("abce"));

function fearNotLetter(str) {

  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1)
    }
  }
}
console.log(fearNotLetter('ABCE'))






