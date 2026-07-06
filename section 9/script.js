"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const person1 = new Person("Sohil", 2005);

// console.log(person1);

// const person2 = new Person("Sohil1", 2006);

// console.log(person2);

// Person.prototype.calcAge = function () {
//   console.log(`${2026 - this.birthYear}`);
// };

// person1.calcAge();

// const p1 = {
//   firstName: "Sohil",
//   lastName: "Kareliya",
//   getFullName() {
//     `${this.firstName} ${this.lastName}`;
//   },
// };

// const p2 = Object.create(p1);

// console.log(p2.lastName);

// const p1 = {
//   xp1: "I am inside the p1.",
// };

// const p2 = {
//   xp2: "I am inside the p2",
//   __proto__: p1,
// };

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // method will be added to prototype property112154526568987
  calcAge() {
    console.log(`${2026 - this.birthYear}`);
  }
}

const sohil = new PersonCl("Sohil", 20);
console.log(sohil);
