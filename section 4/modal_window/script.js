"use strict";

const dis = document.querySelector(".hidden");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

showModal.forEach((modal) => {
  modal.addEventListener("click", () => {
    // dis.style.display = "block";
    dis.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  // dis.style.display = "none";
  dis.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", (event) => {
  dis.classList.add("hidden");
  overlay.classList.add("hidden");
});

// body.addEventListener("click" , (event) => {
//   dis.style.display = "none";
// })

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    console.log(event);
    event.preventDefault();
    console.log(event);
    // dis.style.display = "none";
    dis.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
