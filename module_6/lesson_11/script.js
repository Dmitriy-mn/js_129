/**
 * ----------------------------------------
 */
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Авто ${this.brand} прискорюєтьсяю. Швидкість ${this.speed}`);
//     }, 
//     decrease() {
//         if(this.speed <= 0) {
//             console.log(`Авто ${this.brand} зупинилось`);
//             return;
//         }

//         this.speed -= 10;
//         console.log(`Авто ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);








// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


// const SPEED = 60;

// const bmw = {
//     brand: "bmw",
//     speed: 30
// }

// const audi = {
//     brand: "audi",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     // if(this.speed <= maxSpeed) {
//     //     return `Авто ${this.brand} рухається з безпечною швидкістю`;
//     // }

//     // return `Авто ${this.brand} перевижує`;

//     return this.speed <= maxSpeed ? 
//         `Авто ${this.brand} рухається з безпечною швидкістю` :
//         `Авто ${this.brand} перевижує`;
// }


// console.log(speedSensor.call(bmw, SPEED))

// const audiSpeedSensor = speedSensor.bind(audi);

// console.log(audiSpeedSensor(SPEED));









