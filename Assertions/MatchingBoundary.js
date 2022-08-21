const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];
/**
 * Let's select descriptions that have word endings with ed or en
 */
const fruitsWithDescription1 = fruitsWithDescription.filter( fruits => {
    return (
        /(en|ed)\b/.test(fruits)
    )
} )
console.log( fruitsWithDescription1 );