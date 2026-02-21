// let dateNow = new Date();
// console.log(dateNow); // object
// console.log(Date.now());
// console.log(dateNow.getTime()); // millSeconds From 1/1/1970 (equal to Date.now())
// console.log(dateNow.getDate()); // date of month
// console.log(dateNow.getDay()); // day of week Sunday = 0
// console.log(dateNow.getFullYear()); // year in the object
// console.log(dateNow.getHours()); // hours in the object
// console.log(dateNow.getMinutes()); // minutes in the object
// console.log(dateNow.getSeconds()); // seconds in the object
// console.log(dateNow.getMilliseconds()); // ms in the objects

// -------------------------------------------------------------------------------------------------

// console.log(dateNow.setTime(10000))
// // console.log(dateNow) // 10 seconds from 1/1/1970
// console.log(dateNow.setDate(28))
// // console.log(dateNow) // sets the current day of month (28 feb)

// console.log(dateNow.setFullYear(2005, 6, 5));
// console.log(dateNow);
// console.log(dateNow.setHours(11, 20, 10, 16));
// console.log(dateNow);

// -------------------------------------------------------------------------------------------------

// console.log(Date.parse("2005-07-01"));
// let datNow = new Date(Date.parse("2005-07-01"));
// console.log(datNow);

// let date2 = new Date(2005, 5, 26, 4, 30, 10, 0);
// console.log(date2);

// -------------------------------------------------------------------------------------------------

// let start = performance.now();

// for (let i = 0; i < 1000; i++) {
//   let div = document.createElement("div");
//   div.append(document.createTextNode(i));
//   document.body.append(div);
// }

// let end = performance.now();

// console.log(`This Is Performanc ${end - start} ms`);

// -------------------------------------------------------------------------------------------------

// function* generatorForNums() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// console.log(typeof generatorForNums())

// for (let value of generatorForNums()) {
//   console.log(value);
// }

// -------------------------------------------------------------------------------------------------

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Stop Here"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// -------------------------------------------------------------------------------------------------

// function* generateInfiniteNums() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// let gen = generateInfiniteNums()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// -------------------------------------------------------------------------------------------------

// let a = 1;
// let arr = [1, 2, 3];

// function doSomething() {
//   return "Something";
// }

// export { a, arr, doSomething };

// export default function () {
//   return "Hi From Default";
// }
