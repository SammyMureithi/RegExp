const aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
const myRegExp = /[AEIOUaeiou]/g;

const res = aliceExcerpt.match( myRegExp )
console.log("Number Of Vowels "+res.length)