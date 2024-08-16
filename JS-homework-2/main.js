// Функции для калькулятора

// 1. Базовые операции калькулятора

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

/* console.log(add(2, 4));
console.log(subtract(9, 8));
console.log(multiply(9, 3));
console.log(divide(23, 2)); */

// 2. Функция калькулятора
// 4. Расширение калькулятора
function calculate(x, y, operator) {
    if (operator === '+') {
        return x + y;
    }
    if (operator === '-') {
        return x - y;
    }
    if (operator === '*') {
        return x * y;
    }
    if (operator === '/') {
        if (y !== 0) {
            return x / y;
        }
        else if (y === 0) {
            return 'Нельзя делить на ноль!';
        }
    }
    if (operator === '^') {
        if (x === y) {
            return x * y; 
        }
        else if (x !== y) {
            return 'Введите одинаковые числа!';
        }
    }
    else {
        return 'Ошибка при вычислении';
    }
}

/* console.log(calculate(9, 9, '^'));
console.log(calculate(65, 7, '^'));
console.log(calculate(2, 4, '+'));
console.log(calculate(2, 4, '-'));
console.log(calculate(2, 4, '*'));
console.log(calculate(2, 4, '/'));
console.log(calculate(2, 0, '/'));
console.log(calculate(2, 4, '7')); */

// 3. Стрелочные функции

add = (a, b) => a + b;

subtract = (a, b) => a + b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;


// Объекты в JavaScript 

// 1. Создание объекта

const user = {
    name: 'Asad',
    age: 18,
    email: 'something@gmail.com',
    isAdmin: false
};

// 2. Доступ к свойствам объекта

console.log(`Имя пользователя: ${user.name}. Возраст: ${user.age} лет.`);

// 3. Обновление свойств объекта

user.email = "newemail@example.com";

user.address = "123 Main St";

console.log(user);

// 4. Удаление свойства

delete user.isAdmin;

console.log(user);

// 5. Копирование объекта

const userCopy = Object.assign({}, user);

userCopy.name = "John";

console.log(user);
console.log(userCopy);