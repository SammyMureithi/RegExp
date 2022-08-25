const myString = "Hello world.Hello Kenya.Kenya is a greate place to be";
const myReplaceRegex = /Kenya/ig;

console.log( myReplaceRegex.test( myString ) );
//returns true if the string meets our regex standard otherwise false
//onec the match is found it returns true otherwise false