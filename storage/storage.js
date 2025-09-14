const btnSet = document.getElementById(".btnSet");
const btnGet = document.getElementById(".btnGet");
const set = document.getElementById(".set");
const get = document.getElementById(".get");

btnSet.addEventListener("click", klikSet);
btnGet.addEventListener("click", klikGet);
const etArray = [{ navn: "Tamara" }, { navn: "Levan" }];
console.log(etArray[1].navn);

function klikSet() {
  locolStorage.setItem("myData", JSON.stringify(etArray));
}

let arrayFromLocalStorage;
function klikGet() {
  get.value = localStorage.getItem("myData");
  arrayFromLocalStorage = get.value;
  console.log(arrayFromLocalStorage[1].navn);
}
