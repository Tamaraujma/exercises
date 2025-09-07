"Use script";

const name = "tamara";
//gør hele navnet lowercase
const lower = name.toLowerCase();

// Sæt kun første bogstav til uppercase, resten til lowercase
const result = lower.charAt(0).toUpperCase() + lower.substring(1);

console.log(result); //Tamara
