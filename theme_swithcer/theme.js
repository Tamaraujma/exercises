const select = document.getElementById("theme_select");
const body = document.body;

select.addEventListener("change", function () {
  body.setAttribute("data-theme", this.value);
});

// const bodyElm = document.querySelector("#theme_select)").addEventListener("change", (evt) => {
//   console.log(evt.target.value);
//   bodyElm.dataset.theme = evt.target.value;
// });
