const inQueueDiv = document.getElementById("inQueue"); // Henter div-elementet hvor tallet skal vises
const progressBar = document.getElementById("progress-bar"); // Henter progress bar elementet

const maxValue = 50; // Definerer en maksimal værdi for inQueue
let lastValue = null; // Gemmer den tidligere værdi for at kunne sammenligne

// Funktion til at hente data fra API'et
async function fetchData() {
  //Henter data fra API'et
  const res = await fetch(" https://kea-alt-del.dk/kata-distortion/");
  //Konverterer svaret til JSON
  const data = await res.json();
  console.log(data);
  //Henter inQeue værdien fra data
  const value = data.inQueue;
  //Opdaterer tallet i diven'en
  inQueueDiv.textContent = value;

  // Opdaterer progress barens bredde i forhold til værdien
  const percent = Math.min((value / maxValue) * 100, 100);
  progressBar.style.width = percent + "%";
}

inQueueDiv.addEventListener("transitionend", () => {
  inQueueDiv.classList.remove("grow");
});

fetchData();
setInterval(fetchData, 1000);
