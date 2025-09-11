document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const width = container.offsetWidth;
  const height = container.offsetHeight;
  //udregn procentdelen af X-positionen
  const hue = Math.floor((x / width) * 360); //sæt farven til procenten
  const saturation = Math.floor((y / height) * 100); //sæt mætningen til procenten
  const lightness = 20 + (x / width) * 60; //sæt lysstyrken til procenten (du kan evt. begrænse intervallet)

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  container.style.backgroundColor = color;
});
