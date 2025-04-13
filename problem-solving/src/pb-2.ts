/* 
*2.Task: Object Manipulation

Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

*/

interface IBook {
  title: string;
  author: string;
  year: number;
}

const books: IBook[] = [
  { title: "Padma Nodir Majhi", author: "Manik Bandopadhyay", year: 1936 },
  { title: "Lalsalu", author: "Syed Waliullah", year: 1948 },
  { title: "Shongkhonil Karagar", author: "Humayun Ahmed", year: 2003 },
];

const getTitles = (arr: IBook[]): string[] => arr.map((book) => book.title);

console.log(getTitles(books));
