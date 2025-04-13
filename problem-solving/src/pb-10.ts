/* 
*10. Task: Functional Programming - Reduce

Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.
*/

interface IItem {
  name: string;
  quantity: number;
  price: number;
}

const cart: IItem[] = [
  { name: "Shirt", quantity: 2, price: 800 },
  { name: "Pant", quantity: 1, price: 1200 },
  { name: "Shoes", quantity: 1, price: 1500 },
];

const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

console.log(total);
