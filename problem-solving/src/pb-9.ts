/* 
*09.Task: Advanced Sorting

Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

*/

interface IStudent {
  name: string;
  grades: number[];
}

const students: IStudent[] = [
  { name: "Rahat", grades: [80, 90, 85] },
  { name: "Rima", grades: [95, 92, 90] },
  { name: "Ratul", grades: [70, 75, 72] },
];

students.sort((a, b) => {
  const avgA = a.grades.reduce((sum, g) => sum + g) / a.grades.length;
  const avgB = b.grades.reduce((sum, g) => sum + g) / b.grades.length;
  return avgB - avgA;
});

console.log(students.map((s) => s.name));
