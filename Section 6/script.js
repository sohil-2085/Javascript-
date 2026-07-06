"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

///////////////////////////////////////

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html); // it started end from begin
    //containerMovements.insertAdjacentHTML("beforeend", html); // it starting add from end
  });
};
displayMovements(account1.movements);

// -----------map-method------------
// this is to give all users to specific username
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);
console.log(accounts);

// ---------------filter-method-----------
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

// ---------------reduce-method-----------
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

// ----------Chaining Method------------
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// --------------event handlers-------------------
//login
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // it prevents from submitting the form
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = "1";

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // displayMovements(currentAccount.movements);

    // calcDisplayBalance(currentAccount);

    // calcDisplaySummary(currentAccount);
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  // amount > 0 &&
  // receiverAcc?.username !== currentAccount.username &&
  // amount <= currentAccount.balance
  //   ? console.log(true)
  //   : console.log(false);

  if (
    amount > 0 &&
    receiverAcc?.username !== currentAccount.username &&
    amount <= currentAccount.balance
  ) {
    // console.log("transfer valid....");
    // now for doing transfer we can add the current amount as a negative in sender and positive in receiver movements array
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    inputTransferTo.blur();
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);

    // delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = "0";

    inputClosePin.blur();
    console.log("deleted");
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    //updating ui
    inputLoanAmount.blur();
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// // also we can write with the arrow function
// const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescription = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1} : You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1} : You withdraw ${Math.abs(mov)}`;
//   }
// });

// console.log(movementsDescription);

/////////////////////////////////////////////////

// -----for-each------
// console.log("-----for-each------");

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdraw ${Math.abs(mov)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// const currenciesUnique = new Set(["USD", "EUR", "USD", "INR", "EUR", "GBP"]);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// -------dog---------

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function(dog, i){
//     if(dog >= 3){
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//     } else {
//       console.log(`Dog number ${i+1} is still a Puppy 🐶`)
//     }
//   })

// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann')

// console.log(account)

///////////////
// challenge 4
//////////////
// const breeds = [
//   {
//     breed: "German Shepherd",
//     averageWeight: 32,
//     activities: ["fetch", "swimming"],
//   },
//   {
//     breed: "Dalmatian",
//     averageWeight: 24,
//     activities: ["running", "fetch", "agility"],
//   },
//   {
//     breed: "Labrador",
//     averageWeight: 28,
//     activities: ["swimming", "fetch"],
//   },
//   {
//     breed: "Beagle",
//     averageWeight: 12,
//     activities: ["digging", "fetch"],
//   },
//   {
//     breed: "Husky",
//     averageWeight: 26,
//     activities: ["running", "agility", "swimming"],
//   },
//   {
//     breed: "Bulldog",
//     averageWeight: 36,
//     activities: ["sleeping"],
//   },
//   {
//     breed: "Poodle",
//     averageWeight: 18,
//     activities: ["agility", "fetch"],
//   },
// ];

// const huskyWeight = breeds.find(
//   (breed) => breed.breed === "Husky",
// ).averageWeight;
// console.log(huskyWeight);

// const dogBothActivities = breeds.find(
//   (breed) =>
//     breed.activities.includes("fetch") && breed.activities.includes("running"),
// ).breed;
// console.log(dogBothActivities);

// // const allActivities = breeds.map((breed) => breed.activities).flat();
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// // 4.
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5.
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .flatMap(breed => breed.activities)
//       .filter(activity => activity !== 'swimming')
//   ),
// ];
// console.log(swimmingAdjacent);

// // 6.
// console.log(breeds.every(breed => breed.averageWeight > 10));

// // 7.
// console.log(breeds.some(breed => breed.activities.length >= 3));

// // BONUS
// const fetchWeights = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);
// const heaviestFetchBreed = Math.max(...fetchWeights);

// const overalBalance = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overalBalance);
