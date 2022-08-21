const input = [99 ,95, 919, 929 ,9119, 9219, 999 ,9919 ,91119];

const res = input.filter( num => {
    return (
        /\b91*9*\b/.test(num)
    )
} )
console.log(res)