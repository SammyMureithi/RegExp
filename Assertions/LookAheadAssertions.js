/**
 * Js LookAhead Assertions x(?=y)
 * match any x that is followed by y
 * Let's match any "Firts" that is followed by "test"
 * Returns null if no match is found
 */
const regeEx = /First(?= test)/;

console.log( 'First test'.match( regeEx ) );
console.log('First peach'.match(regeEx));