const input = [99 ,95, 919, 929 ,9119, 9219, 999 ,9919 ,91119];

const res = input.filter( num => {
    return (
        /\b9*1{1,3}9{1,4}\b/.test(num)
    )
} )
console.log(res)