let array = [1,2,3,4,5,6,7,8,9,10]

let odd_numbers = array.filter( x => x % 2 != 0)

let divisible_2_or_5 = array.filter (x => (x % 2 == 0) || (x % 5 == 0))

let divisible_3_then_squared = array.filter ( x => x % 3 == 0).map(x => x * x)

let sum_divisible_5_squared = array.filter( x => x % 5 == 0).map(x => x * x).reduce((a,b) => a + b,0)

console.log(`a. An array of odd numbers: ${odd_numbers}`)
console.log(`b.	An array of numbers divisible by 2 or 5: ${divisible_2_or_5 }`)
console.log(`c.	An array of numbers divisible by 3 squared: ${divisible_3_then_squared}`)
console.log(`d.	The sum of the following: square the numbers divisible by 5: ${sum_divisible_5_squared} `)
