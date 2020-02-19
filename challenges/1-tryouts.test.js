/**
 * This challenge requires you to take the string "banana",
 * reverse it so that it spells "ananab", then insert a
 * hyphen between each character
 */
challenge({
  index: 'challenge 1',
  description: 'Reverse and kebab the word "banana"',
  input: 'banana',
  expected: 'a-n-a-n-a-b',
}, (input) => {
  // code here
})





/**
 * This challenge requires you to output the Fizz Buzz sequence
 * up to the number 20. The rules of Fizz Buzz are as follows:
 * - If the number is a multiple of 3, output "Fizz" instead of the number
 * - If the number is a multiple of 5, output "Buzz" instead of the number
 * - If the number is both a multiple of 3 and 5, output "Fizz Buzz" instead of the number
 * - Otherwise, output the number
 */
challenge({
  index: 'challenge 2',
  description: 'Fizz Buzz challenge to 20',
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  expected: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16, 17, 'Fizz', 19, 'Buzz'],
}, (input) => {
  // code here
})





/**
 * This challenge requires you to calculate the area of
 * three triangles and return the sum of all the areas.
 * The formula for the area of a triangle is: `(base * height) / 2`
 */
challenge({
  index: 'challenge 3',
  description: 'Sum the area of three triangles',
  input: [{ base: 20, height: 15 }, { base: 6, height: 16 }, { base: 15, height: 30 }],
  expected: 423,
}, (input) => {
  // code here
})





/**
 * This challenge requires you to loop through an array of
 * 2 digit numbers and retrun whether the digits are larger
 * in their current order, or if they were swapped around. E.g.
 * 41 > 14 = true
 * 27 < 72 = false
 */
challenge({
  index: 'challenge 4',
  description: 'Is this order largest?',
  input: [12, 54, 63, 38, 21, 46, 79],
  expected: [false, true, true, false, true, false, false],
}, (input) => {
  // code here
})





/**
 * This challenge requires you to add up all the numbers from
 * 1 to the input number, returning the sum for each item in
 * the array. For example, the first item in the array is 4
 * then you should return 10 because 1 + 2 + 3 + 4 = 10.
 */
challenge({
  index: 'challenge 5',
  description: 'Sum all digits upto the input value',
  input: [4, 13, 600],
  expected: [10, 91, 180300],
}, (input) => {
  // code here
})