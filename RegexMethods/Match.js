const myString = "Hello world.Hello Kenya.Kenya is a greate place to be";
const mySearchRegex = /Kenya/ig;

console.log( myString.match( mySearchRegex ) );
/**
 * Match with no global flag returns a object as below
 * [
  'Kenya',
  index: 18,
  input: 'Hello world.Hello Kenya.Kenya is a greate place to be',
  groups: undefined
]
but with such it reurns the array of all accurence of the string
 */