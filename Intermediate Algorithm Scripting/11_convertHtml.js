// function convertHTML(str) {
//     const strArr = str.split('');
//     return strArr.map((huruf => {
//         switch(huruf){
            // case '&' :   return '&amp'
            // case '<' : return '&lt'
            // case '>' : return '&gt'
            // case "'" : return '&apos'
            // case '"' : return '&quot'
            // default : return huruf
               
//         }
        
//     })
//     )}
  
// console.log(convertHTML("Dolce & Gabbana"));
function convertHTML(str) {
    const strArr = str.split('');
    const huruf = strArr.map((huruf) => {
        switch(huruf) {
            case '&':
                return '&amp'
            case '<' :
                return '&lt'
            case '>' :
                return '&gt'
            case "'" :
                return '&apos'
            case '"' :
                return '&quot'
            default :
            return huruf
        }
    }).join('')
    return huruf
}

console.log(convertHTML("Dolce & Gabbana"));