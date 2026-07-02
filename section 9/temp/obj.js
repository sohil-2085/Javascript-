function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5(10));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};
// this will cause error
// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();

// console.log(chai, tea)

// let myName = "Sohil";
// myName = "Sohil     ";
// console.log(myName.length);
// // now we  have to create one method which is return the true length means length without spaces

let myHeros = ["thod", "spiderman"];

let heroPower = {
  thos: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider Power is ${this.spiderman}`);
  },
};

Object.prototype.sohil = function () {
  console.log(`Sohil is present in all objects`);
};

Object.prototype.heySohil = function () {
  console.log(`Sohil Hello`);
};

myHeros.sohil();
// heroPower.sohil();

myHeros.heySohil()
// heroPower.heySohil()

