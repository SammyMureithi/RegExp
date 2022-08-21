const input = [99, 95, 919, 929, 9119, 9219, 9991998, 9919, 91119];
/**
 * We get the number that meets the following condition 
 *    \b starts with a boundary word
 *     91+ have 9 followed with one or more 1 character
 *     9+ have one or more 9 and end with a word 
 */
const res = input.filter( num => /\b91+9+\b/.test( num ));
console.log( res );
