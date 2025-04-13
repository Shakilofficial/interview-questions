/* 
*5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

interface IUser {
  name: string;
  age: number;
}

const users: IUser[] = [
  { name: "Rakib", age: 25 },
  { name: "Sumaiya", age: 22 },
  { name: "Nayeem", age: 30 },
  { name: "Mitu", age: 27 },
];

const updateAge = (arr: IUser[], name: string, newAge: number): IUser[] => {
    const user = arr.find((u) => u.name === name);
    if (user) {
      user.age = newAge;
    }
    return arr;
};

console.log(updateAge(users, "Rakib", 26));
