/**
 * Here comes our problem
 *  We are required to replace all "vowels" with "(vowel)"
 *  We can use backrefrencing to accomplish this task
 */
var str = "Eighty one";
var patt = /([aeiou])/ig;
var replace = "($1)";

var result = str.replace( patt, replace);
console.log( result );