"use script";

// const name = "peter"; // eller "PETER" eller andet

// // Gør hele navnet lowercase
// const lower = name.toLowerCase();
// const higher = name.toUpperCase();
// // Sæt tredje bogstav til uppercase
// const result = lower.substring(0, 2) + lower.charAt(2).toUpperCase() + lower.substring(3);

// const result2 = higher.substring(0, 2) + lower.substring(2);

// console.log(result); // peTer
// console.log(result2); //PETER

// lower.charAt(0) er første bogstav
// lower.charAt(1) er andet bogstav
// lower.charAt(2) er tredje bogstav

const theName = "hAnSE";
const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
const treeCapitalised2 = theName.substring(2, 3).toUpperCase();
const treeCapitalised3 = theName.substring(3).toLowerCase();

console.log(threeCapitalised1 + treeCapitalised2 + treeCapitalised3);
