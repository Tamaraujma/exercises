"use strict";

// const bool = true;
// const num = 41;
// const str = "Peter";
// const obj = {
//   cats: 2,
//   cars: 1,
// };
// const nothing = null;
// let undf;
// const sym = Symbol("symbol");

// console.log("typeof undf:", typeof undf);

// "use strict";
// const num = 17;

// let myString = "45";
// console.log("typof 1", typeof myString);
// myString = Number.parseInt(myString);
// console.log("typof 2", typeof myString);

// const value = true;
// if (value) {
//   console.log("Value is truthy");
// } else {
//   console.log("Value is falsy");
// }

// const n1 = 1;
// const n2 = 2;
// const s1 = "1";
// const s2 = "2";
// console.log(s1 + n2);

// s1 + s2;
// n1 + n2;
// s1 + n2;
// n1 + s2;

// sayHello("Tamara", "Ujmajuridze");
// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// presentPet("Tamara", "cat", "Murdi");
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
// }

// array
// const people = ["Harry", "Ron", "Hermione"];

//en tom variable til at gemme et resultat
// let result;
//For hver af de følgene metoder, gem return-værdien i result og læg mærke til, hvordan hele arrayet ser ud, og de der returneres
// result = people.push("Draco");   // tilføjer et element til slutningen af arrayet
// console.log("result", result);
// console.log("people", people);

// result = people.pop();  // fjerner det sidste element i arrayet
// console.log("result", result);

// result = people.push("Neville");
// result = people.push("Luna");
// result = people.slice(0, 3);  // laver en kopi af arrayet
// result = people.splice(1, 0, "Cho");  // fjerner eller tilføjer elementer i arrayet
// people[1] = "Ginny";
// result = people.push("Fred", "George");
// result = people.indexOf("Fred");
// result = people.splice(result, 1);  // fjerner eller tilføjer elementer i arrayet

// konvertere string til array
// const str = "absdefghijklmn";
// const arr1 = str.split("");
// const arr2 = Array.from(str);
// const arr3 = [...str];
// console.log("arr1", arr1);
// console.log("arr2", arr2);
// console.log("arr3", arr3);

// const array = ["one", "two", "three"];
// const arrayCopy = [...array];
// array[1] = "twenty";
// console.log("arrayCopy", arrayCopy);
// console.log("array", array);

//Functions callbacks arrows
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const sayHi = greeting;
// console.log(sayHi("Tamara"));
// console.log(greeting("Freddie"));

// function congreet(firstName) {
//   return `Hello ${firstName}`;
// }
// setTimeout(congreet, 2000, "Tamara");

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }
// function fireOrHire(action, person) {
//   action(person);
// }
// fireOrHire(hire, person4);

// fireOrHire(fire, person3);

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };

// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };

// callback functions
// const people = ["Harry", "Ron", "Hermione", "Neville"];
// function testParms(a, b, c, d) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// }
// people.forEach(testParms);

//Objects
// let person1 = {
//   firstName: "Tamara",
//   age: 23,
//   student: true,
// };

// console.log(person1.lastName);
// person1.lastName = "Ujmajuridze";
// console.log(person1.lastName);
// person1.lastName = undefined;
// console.log(person1.lastName);
// delete person1.lastName;
// console.log("middleName: ", person1.middleName);
// console.log("middleName:", person1.middleName);
// console.log("person1:", person1);

// const person1 = {
//   firstName: "Tamara",
//   age: 23,
//   student: true,
// };

// console.log(person1);
// person1.age++;
// console.log(person1);

//Strings
const name = "Albus Percival Wulfric Brian Dumbledore";
//1. hvad er det totale antal af karakterer inklusive mellemrum?
console.log(name.length);

// 2. Hvilken karakter er der på index 2?
console.log(name[2]);

// 3. Hvilken karakter er der på index 6?
console.log(name[6]);

// 4. Hvilket index har det første D i Dumbledore?
console.log(name.indexOf("D"));

// 5. Hvilket index har sidste e i Dumbledore?
console.log(name.indexOf("e"));
