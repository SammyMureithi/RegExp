const oranges = ['ripe orange A ', 'green orange B', 'ripe orange C'];
/**
 * Let's filter a string that has the word "ripe " that comes before "orange"
 */
const ripeOrange = oranges.filter( fruits => {
    return (
        /(?<=ripe )orange/.test(fruits)
    )
} )
console.log( ripeOrange )
