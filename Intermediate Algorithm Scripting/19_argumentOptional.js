// * Argunment Optional
function addTogether() {
    if (!Array.from(arguments).every(el => typeof el === 'number' || el === 'array')) {
        return undefined
    }

    
    if(arguments.length == 1) {
        let oldArg = arguments[0]
        return function() {
            let newArg = arguments[0]
            return addTogether(oldArg, newArg)
        }
    } else if(arguments.length == 2) {
        return arguments[0] + arguments[1]
    } 

  }
  
console.log(addTogether(2,3));