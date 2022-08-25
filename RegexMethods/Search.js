const myString = "Hello world.Hello Kenya.Kenya is a greate place to be";
const mySearchRegex = /Kenya/ig;
console.log( myString.search( mySearchRegex ) );
//search returns the index of the firts occurence of our string