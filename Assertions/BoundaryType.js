//use regular expressions to fix buggy lines

 const buggyMultipleLine = `tey, tihe light-greon tpple
tangs on ihe greon traa ink`;
//use ^ to fix the matching at the beggining of a string and right after newline
const buggyMultipleLine2 = buggyMultipleLine.replace( /^t/gim, "THE" );
console.log( buggyMultipleLine2 )
/**Above we are replacing the "buggyMultipleLine" start that beggings with "t" and the
 *  new line that start with "t" with "THE" */

/**
 * We could also use $ to replace the ending of our strings at end of multiline strings
 */
console.log("ENDINGS")
const buggyMultipleLine3 = buggyMultipleLine.replace( /e$/gim ,"🔨")
console.log( buggyMultipleLine3 )
console.log("Border")
/** 
 * Here we are trying to match any word that starts with character "i" and 
 * we are replace it with whatever we want ,Note that the word should 
 * start with a white space on non-word character 
*/
const buggyMultiline4= buggyMultipleLine.replace(/\bi/gim,"🔨");
console.log( buggyMultiline4 );
console.log( ">>>>>>>>>>>>>>>>>:::::::<<<<<<<<<<<<<<<<<" );
/**
 * Here we are replacing "h"'s that come only before a word character 
 * \B allows us to replace the characater that occurs right before a character of the same type,
 * if a word character the word character if non word character the non-word character
 */
const buggyMultipleLine5 = buggyMultipleLine.replace( /\Bh/gim, "🔨" );
console.log( buggyMultipleLine5 );