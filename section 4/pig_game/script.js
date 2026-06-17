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

score0El.textContent = localStorage.getItem("score0") || 0;
score1El.textContent = localStorage.getItem("score1") || 0;
// currentScore0El.textContent = localStorage.getItem("currentScoreOf0") || 0;
// currentScore1El.textContent = localStorage.getItem("currentScoreOf0") || 0;

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
    // const scoreOf0 = Number(score0El.innerHTML);
    // console.log(Number(score0El.innerHTML), typeof scoreOf0)
    // score0El.innerHTML = scoreOf0 + rNumber;
    const currentScore0 = Number(currentScore0El.innerHTML);
    currentScore0El.innerHTML = currentScore0 + rNumber;
    current0 = currentScore0 + rNumber;
  } else if (rNumber != 1 && player1El.classList.contains("player--active")) {
    // const scoreOf1 = Number(score1El.innerHTML);
    // console.log(Number(score0El.innerHTML), typeof scoreOf0)
    // score1El.innerHTML = scoreOf1 + rNumber;
    const currentScore1 = Number(currentScore1El.innerHTML);
    currentScore1El.innerHTML = currentScore1 + rNumber;
    current1 = currentScore1 + rNumber;
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
    console.log(` el1 ${current0 + Number(localStorage.getItem("currentScoreOf0"))}, ${current0}`);
    score0El.innerHTML =
      current0 + Number(localStorage.getItem("currentScoreOf0"));
    localStorage.setItem("currentScoreOf0", current0 + Number(localStorage.getItem("currentScoreOf0")));
    currentScore0El.innerHTML = 0;
    current0 = 0;
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
  } else {
    console.log(` el2 ${current1 + Number(localStorage.getItem("currentScoreOf1"))}, ${current1}`);
    score1El.innerHTML =
      current1 + Number(localStorage.getItem("currentScoreOf1"));
    localStorage.setItem("currentScoreOf1", current1 + Number(localStorage.getItem("currentScoreOf1")));
    // score1El.innerHTML = current1;
    currentScore1El.innerHTML = 0;
    current1 = 0;
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
  }
});

newGame.addEventListener("click", () => {
  // dice.style.display = "none";
  localStorage.clear();
  location.reload();
});
