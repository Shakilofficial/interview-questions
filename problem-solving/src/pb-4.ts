/* 
*4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

interface ICar {
  make: string;
  model: string;
  year: number;
}

const cars: ICar[] = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Mitsubishi", model: "Lancer", year: 2022 },
];

const sortCars = (arr: ICar[]): ICar[] => {
  return arr.sort((a, b) => a.year - b.year);
};

console.log(sortCars(cars));
