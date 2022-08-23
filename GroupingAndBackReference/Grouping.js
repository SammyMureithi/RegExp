/***
 *    Here is our task 
 * Our task is to write an expression to match the first occurence of the word "cat" ocuuring on or more times in a string
 *  To coorectly get one or more times we us the + quantifies
 *  To get the first occurence we need not to use the global flag
 *  To quantify the whole word "cat" we need to use a group
 */
 const myRegex = /(cat)+/;
const myString = "catcat,cat, catcatcat, cat, ccat, cccat, cat, caat, caaat";
const result = myString.match( myRegex );
console.log(result)