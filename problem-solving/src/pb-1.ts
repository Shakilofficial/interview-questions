/* 
*1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. 

*/

interface IPerson {
  name: string;
  age: number;
  gender: string;
}

const people: IPerson[] = [
  { name: "Rakib", age: 25, gender: "male" },
  { name: "Sumaiya", age: 22, gender: "female" },
  { name: "Nayeem", age: 30, gender: "male" },
  { name: "Mitu", age: 27, gender: "female" },
];

const getMaleNames = (arr: IPerson[]): string[] => {
  return arr.filter((p) => p.gender === "male").map((p) => p.name);
};

console.log(getMaleNames(people));
