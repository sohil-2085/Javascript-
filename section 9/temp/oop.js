const user = {
  username: "Sohil",
  loginCount: 30,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got User Details from database");
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn) {
  ((this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn));
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// const userOne = User("Sohil", 20, true);
// const userTwo = User("Sohil1", 21, false);
const userOne = new User("Sohil", 20, true);
const userTwo = new User("Sohil1", 21, false);
console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userTwo);
