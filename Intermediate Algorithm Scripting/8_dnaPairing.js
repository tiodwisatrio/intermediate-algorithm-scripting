// * DNA PAIR -> Mencocokan DNA
// * Cara 1
function pairElement(str) {
    const strArr = str.split('')
    const result = []
    strArr.forEach(el => {
        if (el === 'G') {
            result.push(['G', 'C'])
        } else if(el === 'C') {
            result.push(['C', 'G'])
        }else if(el === 'A') {
            result.push(['A', 'T'])
        }else if(el === 'T') {
            result.push(['T', 'A'])
        }else {
            return result
        }
    })
    return result;
  }
  
  console.log(pairElement("GCG"));


// * Cara 2
function newPairElement(string) {
    const pair = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'T',
    }

    return string.split('').map(el => [el, pair[el]])
}

console.log(newPairElement("GCG"));