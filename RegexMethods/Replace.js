const myString = "Hello world.Hello Kenya.Kenya is a greate place to be";
const myReplaceRegex = /Kenya/ig;
console.log( myString.replace( myReplaceRegex, "Nairobi" ) )
/**
 * With the global flag set it will replace all the occurence of our regex
 */