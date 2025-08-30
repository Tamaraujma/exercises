// function momsBregning(bergning = "100kr", moms = "25%") {
//   console.log(`${bergning} ${moms}`);
// }

function momsBregner(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBregner(200);
