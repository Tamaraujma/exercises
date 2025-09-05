const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function isElectrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}
// const onlyElectricVehicles = vehicles.filter(isElectrisk);
// console.log("onlyElectricVehicles", onlyElectricVehicles);
//showTheseVehicles(vehicles.filter(isElectrisk));

function manyPassengers(vehicle) {
  if (vehicle.passengers > 1) {
    return true;
  }
}
const onlyManyPassengers = vehicles.filter(manyPassengers);
// showTheseVehicles(vehicles.filter(manyPassengers));

function ejetAfJonas(vehicle) {
  if (vehicle.ownedBy === "Jonas") {
    return true;
  }
}

// showTheseVehicles(vehicles.filter(ejetAfJonas));

function Rugbrød(vehicle) {
  if (vehicle.fuel === "Rugbrød") {
    return true;
  }
}
// showTheseVehicles(vehicles.filter(Rugbrød));

// showTheseVehicles(vehicles);
// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td>
//   <td>${each.stops}</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//   });
// }

// showTheseVehicles(vehicles);
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // Ryd tabellen først!
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type ? each.type : "---"}</td>
      <td>${each.fuel ? each.fuel : "---"}</td>
      <td>${each.passengers !== undefined ? each.passengers : "---"}</td>
      <td>${Array.isArray(each.stops) ? each.stops.join(", ") : "---"}</td>
      <td>${each.ownedBy ? each.ownedBy : "---"}</td>
      <td>${each.isElectric === true ? "Ja" : "---"}</td>
      <td>${each.isTandem === true ? "Ja" : "---"}</td>
    </tr>`;
  });
}

document.getElementById("btn-electric").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isElectrisk));
});
document.getElementById("btn-many").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(manyPassengers));
});
document.getElementById("btn-jonas").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(ejetAfJonas));
});
document.getElementById("btn-rugbrod").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(Rugbrød));
});
document.getElementById("btn-all").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});
