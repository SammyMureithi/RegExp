const randomData = "015 354 8787 687351 3512 8735";

/**
 * Let's start finding our match from the start of the word
 * Let's search a word with exactly four words
 * Let's only terminate our search at the end of the word
 * */
const myRegExp = /\b\d{4}\b/g;
console.table(randomData.match(myRegExp));
// ['8787', '3512', '8735']