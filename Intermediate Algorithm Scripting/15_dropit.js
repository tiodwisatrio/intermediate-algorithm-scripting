// * DROP IT -->
function dropElements(arr, func) {
    while(!func(arr[0])) {
        arr.shift()
    }
    return arr
  }
  
console.log(dropElements([1, 2, 3, 5, 7], function(n) {return n < 3; }));