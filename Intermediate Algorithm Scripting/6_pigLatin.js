// * PIG LATIN -> Memindahkan huruf pertama (konsonan) ke huruf terakhir ditambah dengan 'way' atau 'ay'
const translatePigLatin = (str) => (str.match(/^[aiueo]/) ? str + 'way' : str.replace(/([^aiueo]+)(\w*)/, '$2$1ay') )

console.log(translatePigLatin("consonant"));
// output : onsonantcay