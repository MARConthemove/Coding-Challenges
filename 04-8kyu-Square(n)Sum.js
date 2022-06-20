/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

console.log(squareSum([1, 2]))

// Variante 1 (with .reducer)
/*
function squareSum(numbers) {
  return numbers.reduce((sum, number) => {
    return number ** 2 + sum
  }, 0)
}
*/

// Variante 2 (with .forEach)
/*
function squareSum(numbers) {
  let sum = 0
  numbers.forEach((num) => {
    sum += num ** 2
  })
  return sum
}
*/

// Variante 3 (with a loop):
/*
function squareSum(numbers) {
  let sum = 0
  for(const number of numbers) {
    sum += (number **2)
  }
  return sum
}
*/

// Variante 4 (with for loop)
/*
function squareSum(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2)
  }
  return sum
}
*/
