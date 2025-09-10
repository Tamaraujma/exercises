"use strict";

const name = "Peter Heronimous Lind";

// Find positionen af første mellemrum
const firstSpace = name.indexOf(" ");
// Find positionen af sidste mellemrum
const lastSpace = name.lastIndexOf(" ");

// Udtræk fornavnet fra start til første mellemrum
const firstName = name.substring(0, firstSpace);
// Udtræk mellemnavnet fra første til sidste mellemrum
const middleName = name.substring(firstSpace + 1, lastSpace);
// Udtræk efternavnet fra sidste mellemrum til slut
const lastName = name.substring(lastSpace + 1);

// Udskriv de tre navne dele
console.log(firstName);
console.log(middleName);
console.log(lastName);
