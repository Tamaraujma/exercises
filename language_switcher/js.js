"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

// Skift tekster på siden ud fra valgt sprog
function updateTexts(locale) {
  texts[locale].texts.forEach((item) => {
    const el = document.querySelector(item.location);
    if (el) el.textContent = item.text;
  });
}

// Start med dansk
updateTexts("da");

// Skift sprog når dropdown ændres
document.getElementById("language").addEventListener("change", (e) => {
  updateTexts(e.target.value);
});
