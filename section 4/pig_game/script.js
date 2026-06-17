"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const holdButton = document.querySelector(".btn--hold");

const finalScore1 = localStorage.getItem("fScore1") || 0;
const finalScore2 = localStorage.getItem("fScore2") || 0;

// currentScore0El.textContent = localStorage.getItem("currentScoreOf0") || 0;
// currentScore1El.textContent = localStorage.getItem("currentScoreOf0") || 0;

// console.log("current0", localStorage.getItem("currentScoreOf0"));
// if (
//   localStorage.getItem("currentScoreOf0") >= 20 ||
//   localStorage.getItem("currentScoreOf1") >= 20
// ) {
//   console.log("hello");
//   score0El.textContent = "Winner 🏆";
//   player0El.style.backgroundColor = "#3CB371";
//   rollDice.disabled = true;
//   holdButton.disabled = true;
//   console.log("game khatam");
// }

function randomNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}
let current0;
let current1;
rollDice.addEventListener("click", () => {
  diceImg.style.display = "block";
  let rNumber = randomNumber();
  // console.log(rNumber);
  diceImg.src = `dice-${rNumber}.png`;
  if (rNumber != 1 && player0El.classList.contains("player--active")) {
    console.log("check", current0, current1);
    // const scoreOf0 = Number(score0El.innerHTML);
    // console.log(Number(score0El.innerHTML), typeof scoreOf0)
    // score0El.innerHTML = scoreOf0 + rNumber;
    const currentScore0 = Number(currentScore0El.innerHTML);
    currentScore0El.innerHTML = currentScore0 + rNumber;
    current0 = currentScore0 + rNumber;

    if (current0 + Number(localStorage.getItem("currentScoreOf0")) >= 100) {
      score0El.textContent = "Winner 🏆";
      player0El.style.backgroundColor = "#3CB371";
      rollDice.disabled = true;
      holdButton.disabled = true;
      console.log("game khatam");
    }
  } else if (rNumber != 1 && player1El.classList.contains("player--active")) {
    // const scoreOf1 = Number(score1El.innerHTML);
    // console.log(Number(score0El.innerHTML), typeof scoreOf0)
    // score1El.innerHTML = scoreOf1 + rNumber;
    const currentScore1 = Number(currentScore1El.innerHTML);
    currentScore1El.innerHTML = currentScore1 + rNumber;
    current1 = currentScore1 + rNumber;

    if (current1 + Number(localStorage.getItem("currentScoreOf1")) >= 100) {
      console.log("hello from 1 ");
      score0El.textContent = "Winner 🏆";
      player0El.style.backgroundColor = "#3CB371";
      rollDice.disabled = true;
      holdButton.disabled = true;
      console.log("game khatam");
    }
  } else {
    if (player0El.classList.contains("player--active")) {
      // console.log(`in if ${current0 + rNumber}`);
      // score0El.innerHTML = 0;
      currentScore0El.innerHTML = 0;
      player0El.classList.remove("player--active");
      // score1El.innerHTML = 0;
      // currentScore1El.innerHTML = 0;
      player1El.classList.add("player--active");
      // localStorage.clear();
    } else {
      // console.log(`in if ${current1 + rNumber}`);
      // score1El.innerHTML = 0;
      currentScore1El.innerHTML = 0;
      player0El.classList.add("player--active");
      // score0El.innerHTML = 0;
      // currentScore0El.innerHTML = 0;
      player1El.classList.remove("player--active");
      // localStorage.clear();
    }
  }
});

holdButton.addEventListener("click", () => {
  if (player0El.classList.contains("player--active")) {
    console.log(
      ` el1 ${current0 + Number(localStorage.getItem("currentScoreOf0"))}, ${current0}`,
    );
    score0El.innerHTML =
      current0 + Number(localStorage.getItem("currentScoreOf0"));
    localStorage.setItem(
      "currentScoreOf0",
      current0 + Number(localStorage.getItem("currentScoreOf0")),
    );
    currentScore0El.innerHTML = 0;
    current0 = 0;
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
    if (current0 >= 20) {
      score0El.textContent = "Winner 🏆";
      player0El.style.backgroundColor = "#3CB371";
      rollDice.disabled = true;
      holdButton.disabled = true;
      console.log("game khatam");
    }
  } else {
    console.log(
      ` el2 ${current1 + Number(localStorage.getItem("currentScoreOf1"))}, ${current1}`,
    );
    score1El.innerHTML =
      current1 + Number(localStorage.getItem("currentScoreOf1"));
    localStorage.setItem(
      "currentScoreOf1",
      current1 + Number(localStorage.getItem("currentScoreOf1")),
    );
    // score1El.innerHTML = current1;
    currentScore1El.innerHTML = 0;
    current1 = 0;
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
    if (current1 >= 20) {
      score0El.textContent = "Winner 🏆";
      player0El.style.backgroundColor = "#3CB371";
      rollDice.disabled = true;
      holdButton.disabled = true;
      console.log("game khatam");
    }
  }
});

newGame.addEventListener("click", () => {
  // dice.style.display = "none";
  localStorage.clear();
  location.reload();
});
