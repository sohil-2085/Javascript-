"use strict";

// const numberPredicted = false;
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const countScore = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");
const message = document.querySelector(".message");

// localStorage.getItem("score");
// console.log(localStorage.getItem("highScore"));
const temp = localStorage.getItem("highScore") || 0;
console.log(typeof temp);
highScore.innerHTML = temp;
// highScore.innerHTML = 10 && 1 && 2;

const randomNumber = function () {
  return Math.trunc(Math.random() * 20);
};
const rNumber = randomNumber();

const prediction = function (value) {
  if (value == number) {
    numberPredicted = true;
  }
};
const reset = function () {
  location.reload();
};

console.log(rNumber);

checkBtn.addEventListener("click", () => {
  const inputEl = document.querySelector(".guess");
  const textValue = inputEl.value;
  console.log(textValue);
  // console.log(inputValue);
  if (rNumber == textValue) {
    console.log(textValue);
    number.innerHTML = textValue;
    document.body.style.backgroundColor = "#3CB371";
    localStorage.setItem("score", countScore.innerHTML);
    // console.log(parseInt(localStorage.getItem("highScore"), 10))
    // console.log(parseInt(localStorage.getItem("score"), 10))
    let cScore = parseInt(localStorage.getItem("score"), 10);
    let hScore = parseInt(localStorage.getItem("highScore"), 10) || 0;
    console.log(cScore, hScore, typeof hScore);
    if (cScore > hScore) {
      localStorage.setItem("highScore", countScore.innerHTML);
    }
    // localStorage.setItem("highScore", 0);
    highScore.innerHTML = localStorage.getItem("highScore");
  } else {
    if (rNumber - textValue > 0 && rNumber - textValue <= 3) {
      message.innerHTML = "Too Close ..... ";
    } else if (rNumber - textValue < 0 && rNumber - textValue >= -3) {
      message.innerHTML = "Too Close ..... ";
    } else if (rNumber - textValue < 0) {
      message.innerHTML = "Too High 📈 ..... ";
    } else if (rNumber - textValue > 0) {
      message.innerHTML = "Too Low 📉 .....";
    }
    let currentNumber = Number(countScore.innerHTML);
    let newNumber = currentNumber - 1;
    countScore.innerHTML = newNumber;
  }
});

again.addEventListener("click", () => {
  reset();
});
