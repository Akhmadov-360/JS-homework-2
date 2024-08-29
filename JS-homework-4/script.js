// Задача 5: Проверка на наличие общего элемента в двух массивах
// Напиши функцию `hasCommonElement`, которая принимает два массива и возвращает `true`, если у них есть хотя бы один общий элемент, и `false` в противном случае.

function hasCommonElement(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
            return true;
          }
        }
    }
    return false;
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = hasCommonElement(array1, array2);
console.log(result); // true

// Задача 6: Преобразование объекта в массив строк
// Напиши функцию `convertObjectToStringArray`, которая принимает объект и возвращает массив строк, где каждая строка имеет формат `"ключ=значение"`.


function convertObjectToStringArray(obj) {
    let str = [];
    for (let key in obj) {
        str.push(`${key}=${obj[key]}`);
    }
    return str;
}

const settings = { theme: 'dark', language: 'en', layout: 'grid' };
const res = convertObjectToStringArray(settings);
console.log(res); // ['theme=dark', 'language=en', 'layout=grid']

// Задача 7: Поиск элемента по значению
// Напиши функцию `findProductByName`, которая принимает массив объектов и имя продукта, и возвращает объект продукта с этим именем. Если продукт не найден, функция должна возвращать `null`.


function findProductByName(arr, string) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === string) {
            result.push(arr[i]);
        }
        else {
            return null;
        }
    }
    return result;
}

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];

const Res = findProductByName(products, 'Phone');
console.log(Res); // { name: 'Phone', price: 500 }