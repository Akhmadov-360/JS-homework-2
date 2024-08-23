/* 1) Создать функцию, которая группирует студентов по возрасту. 

На выходе требуется получить объект, где ключ - возраст, а значение - массив студентов, которые относятся к данной возрастной группе. */
  
const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
];

// 2) Записать строку (символы строки) в обратном порядке

const myStr = 'pizza';

console.log(myStr.split("").reverse().join(""));

// 3) Определить сколько раз каждый элемент встречается в массиве.

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function countOccurrences (arr) {
    const count = {};

    arr.forEach((fruit) => {
        if(count[fruit]) {
            count[fruit] += 1;
        } else {
            count[fruit] = 1;
        }
    });

    return count;
}

console.log(countOccurrences(fruits))