// task 1

const numbers = [-10, 5, 20, -4, 12, -7, 6];

let positiveNumbers = numbers.filter((n) => n >= 0);

console.log(positiveNumbers); // Ожидаемый результат: [5, 20, 12, 6]

// task 2

const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville' }
];

let book = books.find((books) => books.title === 'The Great Gatsby');
  
console.log(book); // Ожидаемый результат: { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }

// task 3

const words = ['Apple', 'Banana', 'Cherry', 'Date', 'Cucumber', 'Fig'];

let index = words.findIndex((letter) => letter.startsWith('C'));

console.log(index); // Ожидаемый результат: 2


// task 4 

const users = ['Alice', 'Bob', 'Charlie', 'David'];

let hasJohn = users.includes('John');

console.log(hasJohn); // Ожидаемый результат: false

// task 5

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 },
    { name: 'Smartwatch', price: 200 }
];

let sortedProducts = products.sort((a, b) => a.price - b.price);

console.log(sortedProducts);

// task 6

const cities = ['Berlin', 'Amsterdam', 'London', 'Paris', 'New York'];

let sortedCities = cities.sort();

console.log(sortedCities); // Ожидаемый результат: ['Amsterdam', 'Berlin', 'London', 'New York', 'Paris']

// task 7

const words2 = ['short', 'longer', 'lengthy', 'tiny', 'big', 'grand'];

let longWords = words2.filter((w) => w.length > 5);

console.log(longWords); // Ожидаемый результат: ['longer', 'lengthy', 'grand']

// task 8

const data = [1, 2, [3, 4, [5]]];

let flatten = data.flat(2);

console.log(flatten); // [1, 2, 3, 4, 5]