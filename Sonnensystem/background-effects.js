// Funktion zur Erstellung von Sternen im Hintergrund
function createStars() {
  const starContainer = document.createElement("div");
  starContainer.classList.add("stars");
  document.body.appendChild(starContainer);

  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * document.body.scrollHeight}px`;
    starContainer.appendChild(star);
  }
}
createStars();

// Funktion zur Erstellung eines UFOs mit der ursprünglichen Logik
let ufoExists = false; // Verhindert mehrere UFOs gleichzeitig
function createUFO() {
  if (ufoExists) return;
  ufoExists = true;

  const ufo = document.createElement("div");
  ufo.classList.add("ufo");
  document.body.appendChild(ufo);

  // Zufällige Start- und Endpositionen bestimmen
  const startPosition = getRandomEdgePosition();
  const endPosition = getRandomEdgePosition();

  // Startposition setzen
  ufo.style.left = `${startPosition.x}px`;
  ufo.style.top = `${startPosition.y}px`;

  // Dynamisch generierte Keyframes für das UFO
  const bezierCurve = `
    @keyframes ufo-curve {
      0% {
        left: ${startPosition.x}px;
        top: ${startPosition.y}px;
      }
      25% {
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
      }
      50% {
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
      }
      75% {
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
      }
      100% {
        left: ${endPosition.x}px;
        top: ${endPosition.y}px;
      }
    }
  `;

  // Keyframes im Stylesheet hinzufügen
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(bezierCurve, styleSheet.cssRules.length);

  // Animation auf das UFO anwenden
  ufo.style.animation = `ufo-curve ${Math.random() * 10 + 5}s linear`;

  // Entfernen des UFOs nach der Animation
  ufo.addEventListener("animationend", () => {
    ufo.remove();
    ufoExists = false;
  });
}

// Funktion, um zufällige Positionen am Bildschirmrand zu erzeugen
function getRandomEdgePosition() {
  const side = Math.floor(Math.random() * 4); // 0 = oben, 1 = rechts, 2 = unten, 3 = links
  const width = window.innerWidth;
  const height = window.innerHeight;

  switch (side) {
    case 0: // Oben
      return { x: Math.random() * width, y: -50 };
    case 1: // Rechts
      return { x: width + 50, y: Math.random() * height };
    case 2: // Unten
      return { x: Math.random() * width, y: height + 50 };
    case 3: // Links
      return { x: -50, y: Math.random() * height };
    default:
      return { x: 0, y: 0 };
  }
}
setInterval(createUFO, 10000); // Alle 10 Sekunden ein UFO

function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Zufällige Startposition
  const startX = Math.random() * window.innerWidth;
  const startY = (Math.random() * window.innerHeight) / 2; // Nur obere Hälfte

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  document.body.appendChild(star);

  // Entfernen nach der Animation
  star.addEventListener("animationend", () => {
    star.remove();
  });
}

// Sternschnuppen zufällig erzeugen
setInterval(createShootingStar, 5000); // Alle 5 Sekunden
