const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];
/**
 *   Let's select fruits that begin with "A"
 */
const fruitsSelected = fruits.filter( fruit => {
    return /^A/.test( fruit )
} );
console.log( fruitsSelected );
console.log("<<<<<<<<<<<::::::::::>>>>>>>>>>>>")
/**
 * Let's try matching anything that does not start with an "A"
 */
const fruitsSelected1 = fruits.filter( fruit => /^[^A]/.test( fruit ) );
console.log(fruitsSelected1)