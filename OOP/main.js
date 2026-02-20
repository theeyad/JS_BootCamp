// Assignmnet 1

// // Old
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// // New
// class Car {
//   constructor(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//   }

//   run() {
//     return `Car Is Running Now`;
//   }

//   stop() {
//     return `Car Has Stopped`;
//   }
// }

// let carOne = new Car("MG", 2022, 420000);
// let carTwo = new Car("KIA", 2012, 500000);

// console.log(
//   `Car One Name Is ${carOne.name} And Model Is ${carOne.model} And Price Is ${carOne.price}`,
// );

// console.log(carTwo.run());

// -------------------------------------------------------------------------------------------------------

// Assignmnet 2

// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// class Tablet extends Phone {
//   #size;
//   constructor(name, serial, price, size) {
//     super(name, serial, price);
//     this.#size = size || `Unkown`;
//   }

//   fullDetails() {
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
//   }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown

// -------------------------------------------------------------------------------------------------------

// Assignmnet 3

// Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }

//   #cleanCard() {
//     this.#c = String(this.#c);
//     if (/\d{4}\-\d{4}\-\d{4}\-\d{4}/.test(this.#c)) {
//       this.#c = this.#c;
//     } else {
//       let arrOfNums = this.#c.match(/\d{4}/gi);
//       let credit = arrOfNums.join("-");
//       this.#c = credit;
//     }
//     return this.#c;
//   }

//   get showData() {
//     return `Hello ${this.u} Your Credit Card Number Is ${this.#cleanCard()}`;
//   }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// -------------------------------------------------------------------------------------------------------

// Assignmnet 4

// String.prototype.addLove = function () {
//   return `I Love ${this} Web School`;
// };

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

// -------------------------------------------------------------------------------------------------------

// Assignmnet 5

// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// Object.defineProperties(myObj, {
//   score: {
//     writable: false,
//     enumerable: true,
//     configurable: true,
//   },
//   id: {
//     writable: true,
//     enumerable: false,
//     configurable: true,
//   }
// });

// delete myObj.country;

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
