/* let arrMtx = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

arrMtx[1].push('push');

console.log(arrMtx);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

let sliced = animals.slice(0, 1);

console.log(sliced);
console.log(animals.slice(4, 5));

const newArr = ['hjkhkj', 'jkh', 'juihi'];

console.log(newArr);

console.log(newArr.push(sliced)); */

const Cars = [
    {
        id: Math.random(),
        model: 'Mazda CX-50',
        factory: 'Mazda Toyota Manufacturing USA',
        color: 'Red',
        speed: 220,
        price: 23000
    },
    {
        id: Math.random(),
        model: 'Nissan Leaf',
        factory: 'Nissan North America, Inc. Canton',
        color: 'White',
        speed: 280,
        price: 27000
    },
    {
        id: Math.random(),
        model: 'Kia K5',
        factory: 'Kia Motors Manufacturing Georgia',
        color: 'Black',
        speed: 265,
        price: 25500
    },
    {
        id: Math.random(),
        model: 'BMW X3',
        factory: 'BMW US Manufacturing Company, LLC',
        color: 'Dark-blue',
        speed: 305,
        price: 29000
    },
    {
        id: Math.random(),
        model: 'Subaru Ascent',
        factory: 'Subaru of Indiana Automotive, Inc.',
        color: 'Gray',
        speed: 240,
        price: 23500
    },
];


let randomIndex = Math.floor(Math.random() * Cars.length);

let selectCar = Cars[randomIndex];

alert("ID: " + selectCar.id + " The model " + selectCar.model + " have made in " + selectCar.factory + " in " + selectCar.color + " color, " + "todays price is " + selectCar.price + "$ the record speed is " + selectCar.speed +" km/h");