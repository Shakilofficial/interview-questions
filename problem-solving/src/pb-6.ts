/* 
*6.Task: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

const nums: number[] = [1, 3, 6, 8, 11, 14, 17, 20];

const sumOfEvenNums = (arr: number[]): number => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

console.log(sumOfEvenNums(nums));
