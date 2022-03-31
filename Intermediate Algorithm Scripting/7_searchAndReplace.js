// * SEARCH AND REPLACE -> Mencari kata dan menggantinya dengan yang baru
// * Cara 1
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
      return str.replace(before, after)
    }else{
      return str.replace(before, after.toLowerCase())
    }
  }
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));



// * Cara 2
function myReplace(str, before, after) {
    return str.replace(before, /^[A-Z]/.test(before) ? after[0].toUpperCase() + after.slice(1) : after.toLowerCase());
 }
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));