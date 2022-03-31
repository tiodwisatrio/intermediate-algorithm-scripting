// * WHERE FOR ART THOU -> Mengecek parameter kedua (source) di parameter pertama (collection), jika ada kembalikan nilainya

function whatIsInAName(collection, source) {
    return collection.filter((obj) => Object.keys(source).every((key) => obj[key] === source[key] ))
  }
  
console.log(whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
      ], 
      { last: "Capulet" }));

// Output [ first : 'Tybalt', last : 'Capulet' ]