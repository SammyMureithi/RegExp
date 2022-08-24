const str = "catcatcatcatcat";
/**
 * In our regex we need replace the whole "cat" string therefore requiring us to us a group
 * We are replacing any instance of the word "cat" with "fit" therefore employing the global flag
 * Here we are capturing our group and saving it in a memory
 */
const regex = /(cat)/g;

const res = str.replace( regex, "fit" );
console.log( res );
/**
 * Now let's replace the whole sequence 'cat' with the string 'rabbit'
 * There is no need to save any of the matches
 */
const notSavedMatch = /(?:cat)/g;
const result = str.replace( notSavedMatch, "Rabbit" );
console.log( result );