/* 
*3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const square = (x: number): number => x * x;
const double = (x: number): number => x * 2;
const add5 = (x: number): number => x + 5;

const composed = (x: number): number => add5(double(square(x)));

console.log(composed(3));