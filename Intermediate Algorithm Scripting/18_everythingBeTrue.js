// * Everything be True => Mengecek apakah sebuah objek ada atau tidak, jika ada return TRUE, jika tidak return FALSE
// * Cara 1
function truthCheck(collection, pre) {
    // return pre;
    for (let i = 0; i < collection.length; i++) {
        if(!collection[i].hasOwnProperty(pre) || Boolean(collection[i][pre]) == false) {
            return false
        }
    }
    return true
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));


// * Cara 2
function cekKebenaran(coll, pre) {
    return coll.every((obj) => obj.hasOwnProperty(obj) && Boolean(collection[pre]));
}
console.log(cekKebenaran([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));