"use script";

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
const myRandomNum = getRandomNum(100);

console.log("getRandomNum fra 0 til 100 er", myRandomNum);
