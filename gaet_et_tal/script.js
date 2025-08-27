"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

const computerNum = Math.floor(Math.random() * 100 + 1);

btn.addEventListener("click", klik_btn);
function klik_btn() {
  const brugerGuess = parseInt(input.value);

  console.log(typeof brugerGuess);
  console.log("brugerGuess", brugerGuess);
  console.log("computerNum", computerNum);
  let feedbackText;
  if (brugerGuess === computerNum) {
    feedbackText = "Tillykke du har gættet rigtigt";
  } else if (brugerGuess > computerNum) {
    feedbackText = "Det er for højt prøv igen";
  } else {
    feedbackText = "Det for lavt prøv igen";
  }

  h1.textContent = feedbackText;
  console.log(feedbackText);
}
