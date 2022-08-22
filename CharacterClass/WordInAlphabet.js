const aliceExcerpt = "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";

const myRegExp = /\b[Aa]\w+/g;
console.log(aliceExcerpt.match(myRegExp))