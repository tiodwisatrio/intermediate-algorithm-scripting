// * SPINAL TAP CASE --> Convert String ke Spinal Case (Kebab Case)
// * ini-spinal-case

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]/g, '-')
    .toLowerCase()
  }
  
console.log(spinalCase('thisIsSpinalTap'));
// Output this-is-spinal-tap