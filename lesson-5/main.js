/* let company;
let answer = prompt('Какой компанией был основан JS?');

if (answer === 'Nombas') {
    company = 'Верно';
} else {
    company = 'Неверно';
}

alert(company); */

/* let day = prompt();

switch (day) {
    case '1':
        alert('Monday');
        break;
    case '2':
        alert('Tuesday');
        break;
    case '3':
        alert('Wednesday');
        break;
    case '4':
        alert('Thursday');
        break;
    case '5':
        alert('Friday');
        break;
    case '6':
        alert('Saturday');
        break;
    case '7': 
        alert('Sunday');
        break;
    default: 
        alert("There's only 7 days in the week");
} */

// task 1 
// Напиши программу, которая принимает число и выводит в консоль, является ли оно чётным или нечётным.

let num = prompt();

if (num % 2 === 0) {
    alert('Чётное');
} else {
    alert('Нечётное');
}

// task 2
// Напиши программу, которая принимает два числа и выводит большее из них. Если числа равны, вывести соответствующее сообщение.

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

if (num1 > num2) {
    alert(`Число ${num1} больше`);
} else if (num1 < num2) {
    alert(`Число ${num2} больше`);
} else if (num1 == num2) {
    alert(`Числа ${num1} и ${num2} одинаковые`);
} else {
    alert('Что-то пошло не так');
} 

//task 3
// Напиши программу-калькулятор, которая принимает два числа и одну из следующих операций: +, -, *, /. В зависимости от выбранной операции, программа должна выполнить соответствующее арифметическое действие и вывести результат.

const a = parseFloat(prompt("Введите первое число:"));
const b = parseFloat(prompt("Введите второе число:"));
let operation = prompt("Выберите действие");

if (operation == '+') {
    console.log(a + b);
}
else if (operation == '-') {
    console.log(a - b);
}
else if (operation == '*') {
    console.log(a * b);
}
else if (operation == '/') {
    if (b == 0) {
        console.log('Нельзя делить на ноль');
    }
    else {
        console.log(a / b);
    }
}
else {
    console.log('Неверная операция');
}

// task 4
// Напиши программу, которая принимает текущее время (в часах) и выводит, является ли это утро (с 6 до 12), день (с 12 до 18), вечер (с 18 до 24) или ночь (с 0 до 6).

let getHour = parseFloat(prompt("Введите время"));

function getTimeOfDay (hour) {
    if (hour >= 6 && hour < 12) {
        alert(`Сейчас ${hour} часов утра`)
    } else if (hour >= 12 && hour < 18) {
        alert(`Сейчас ${hour} часов дня`)
    } else if (hour >= 18 && hour < 24) {
        alert(`Сейчас ${hour} часов вечера`)
    } else if (hour >= 0 && hour < 6) {
        alert(`Сейчас ${hour} часов ночи`)
    } else {
        alert(`Введите корректное время`)
    }
}

getTimeOfDay(getHour);

// Дан массив чисел, написать программу которая выведит на экран новый массив состоящий из чисел больше 90.

const n = [78, 92, 90, 88];
let newN = [];

n.forEach((i) => {
    if (i > 90) {
        newN.push(i);
    }
});

console.log(newN);

// task 5
// Напишите функцию, которая принимает массив чисел и выводит на экран их сумму. Используйте метод forEach для итерации по массиву.

const array = [1, 2, 3, 4, 5];

function sumArr (arr) {
    let sum = 0;
    let res;
    arr.forEach((i) => {
        res = sum += i;
        console.log(res);
    });
}

sumArr(array);

// task 6
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждое число удвоено. Используйте forEach для создания нового массива.

let numbers = [1, 2, 3, 4, 5];

function doubleArrays (arr) {
    let newArr = [];
    arr.forEach((i) => {
        newArr.push(i * 2);
    });
    return newArr;
}

console.log(doubleArrays(numbers)); 

// task 7
// Напишите функцию, которая принимает массив чисел и выводит на экран только четные числа из этого массива. Используйте forEach для итерации и проверки условий.

let int = [5, 12, 18, 7, 21, 30];

function myFunc (arr) {
    let newArr = [];
    arr.forEach((i) => {
        if (i % 2 === 0) {
        newArr.push(i);
        }
    });
    return newArr;
}

console.log(myFunc(int));