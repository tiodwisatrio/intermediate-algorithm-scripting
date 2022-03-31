// * Diff Two Arrays => Mencari perbedaan pada 2 array

// * CARA PERTAMA
function diffArray(arr1, arr2) {
    const filter1 =  arr2.filter(el => !arr1.includes(el));
    const filter2 =  arr1.filter(el => !arr2.includes(el));
    const totalFilter = [...filter1,...filter2]
    return totalFilter
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//   Output [4]


// * CARA KEDUA
function diffArrays(el1, el2) {
    return [...el1, ...el2].filter(el => !el1.includes(el) || [...el1, ...el2].filter(el => !el2.includes(el))
)}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//   Output [4]