"use strict";

const btn = document.querySelector("button");
const input = document.querySelector(".text");

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Funtion der erstatter dårlige ord med gode ord
function filterPro(text) {
  let changed = false;
  let result = text;
  curseWords.forEach((word) => {
    //Erstat alle forekomster af de dårlige ord
    const regex = new RegExp(`\\b${word.bad}\\b`, "gi");
    if (regex.test(result)) changed = true;
    result = result.replace(regex, word.good);
  });
  if (!changed) showDialog("Teksten indeholde ingen dårlige ord.");
  return result;
}

// Simpel dialog-funktion
function showDialog(message) {
  alert(message);
}

// Tilføj event listener til knappen
btn.addEventListener("click", () => {
  textContent.value = filterPro(input.textContent);
});
