/* 
*8. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

*/

const nums: number[] = [1, 2, 2, 3, 4, 4, 5];

const getUnique = (arr: number[]): number[] => [...new Set(arr)];

console.log(getUnique(nums));
