// Hent knappen og progress-bar elementet
const btn = document.getElementById("netflix-btn");
const progress = document.getElementById("progress");

// Animationens varighed i millisekunder
let duration = 3000; // 3 sekunder

// Variabler til animationens tilstand
let startTime;
let animationFrame;
let finished = false;
let interrupted = false;

// Funktion der animerer progress-bar
function animateProgress(timestamp) {
  if (!startTime) startTime = timestamp; // Sæt starttidspunkt
  const elapsed = timestamp - startTime; // Tid der er gået
  let percent = Math.min((elapsed / duration) * 100, 100); // Udregn procent
  progress.style.width = percent + "%"; // Opdater bredde på progress-bar

  // Fortsæt animationen hvis ikke afbrudt og ikke færdig
  if (percent < 100 && !interrupted) {
    animationFrame = requestAnimationFrame(animateProgress);
  } else if (!interrupted) {
    finished = true;
    // Handling: Skift baggrundsfarve når animationen er færdig
    document.body.style.background = "#80f0b4";
  }
}

// Funktion der afbryder animationen hvis musen bevæges
function interruptAnimation() {
  if (!finished && !interrupted) {
    interrupted = true;
    progress.style.width = "100%"; // Fyld progress-bar med det samme
    cancelAnimationFrame(animationFrame); // Stop animationen
  }
}

// Lyt efter musens bevægelse på hele vinduet
window.addEventListener("mousemove", interruptAnimation);

// Start animationen når siden er klar
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(animateProgress);
});
