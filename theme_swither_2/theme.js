const select = document.getElementById("theme_select");
const body = document.body;
const storedTheme = localStorage.getItem("theme");
console.log("storedTheme:", storedTheme);
if (storedTheme === null) {
} else {
  document.querySelector("#theme_select").value = storedTheme;
}

select.addEventListener("change", function () {
  body.setAttribute("data-theme", this.value);
  localStorage.setItem("storedTheme", this.value);
});
