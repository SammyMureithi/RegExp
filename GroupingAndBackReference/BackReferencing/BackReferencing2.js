/**
 * Construct an expression to match all substrings in a given
 * test string, that begin with a vowel, followed by a single word,
 *  and finally followed by the same vowel.
 */
const str = "There werEE two logos thrEEE";
const myRegex = /([aeiou])\w\1+/gi;

const res = str.replace(myRegex ,"Done");
console.log( res );