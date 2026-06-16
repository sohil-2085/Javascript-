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
highScore.textContent = temp;
// highScore.textContent = 10 && 1 && 2;

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
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
    message.textContent = "🎉 Correct Number .....";
    console.log(textValue);
    number.textContent = textValue;
    document.body.style.backgroundColor = "#3CB371";
    localStorage.setItem("score", countScore.textContent);
    // console.log(parseInt(localStorage.getItem("highScore"), 10))
    // console.log(parseInt(localStorage.getItem("score"), 10))
    let cScore = parseInt(localStorage.getItem("score"), 10);
    let hScore = parseInt(localStorage.getItem("highScore"), 10) || 0;
    console.log(cScore, hScore, typeof hScore);
    if (cScore > hScore) {
      localStorage.setItem("highScore", countScore.textContent);
    }
    // localStorage.setItem("highScore", 0);
    highScore.textContent = localStorage.getItem("highScore");
  } else {
    if (rNumber - textValue > 0 && rNumber - textValue <= 3) {
      message.textContent = "Too Close ..... ";
    } else if (rNumber - textValue < 0 && rNumber - textValue >= -3) {
      message.textContent = "Too Close ..... ";
    } else if (rNumber - textValue < 0) {
      message.textContent = "Too High 📈 ..... ";
    } else if (rNumber - textValue > 0) {
      message.textContent = "Too Low 📉 .....";
    }
    let currentNumber = Number(countScore.textContent);
    let newNumber = currentNumber - 1;
    countScore.textContent = newNumber;
  }
});

again.addEventListener("click", () => {
  reset();
});
