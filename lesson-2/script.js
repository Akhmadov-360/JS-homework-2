/* const Car = {
    model: 'Lotus',
    color: 'white',
    speed: 230,
    id: 27364,
    price: 23000,
    fullInfo: function () {
        return `The color of ${this.model} is ${this.color}, the record speed is ${this.speed}km/h. The ID of car ${this.id}, you can buy it for ${this.price}$`
    }
};

console.log(Car.fullInfo()); */



console.log(prompt());
const result = prompt;

function calculate(a, b, operation) {
    if (operation === '+') {
        return a + b;
    }
    else if (operation === '-') {
        return a - b;
    }
    else if (operation === '*') {
        return a * b;
    }
    else if (operation === '/') {
        if ( b!= 0) {
            return a / b;
        }
        else if ( b == 0 ) {
            return `На ноль делить нельзя!`
        }
    }
}