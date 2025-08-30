"use script";

const btnStart = document.querySelector("#btn_start");
const btn1 = document.querySelector("#btn_lavt");
const btn2 = document.querySelector("#btn_højt");
const btn3 = document.querySelector("#btn_korrekt");
const h2 = document.querySelector("h2");

let min = 1;
let max = 100;
let guess;
let feedbackText;
btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;

function makeGuess() {
  guess = Math.floor((min + max) / 2);
  h2.textContent = `Gætter på ${guess}?`;
  btnStart.disabled = true;
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
}

function startGame() {
  makeGuess();
}

btnStart.addEventListener("click", startGame);
btn2.addEventListener("click", () => {
  max = guess - 1;
  makeGuess();
});
btn1.addEventListener("click", () => {
  min = guess + 1;
  makeGuess();
});
btn3.addEventListener("click", () => {
  h2.textContent = `Den har gættet rigtigt ${guess}`;
  btnStart.disabled = false;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
});

h2.textContent = feedbackText;
console.log(feedbackText);
