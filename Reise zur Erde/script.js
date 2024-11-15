const canvas = document.getElementById("interactiveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const colors = ["#ffffff", "#ffdd57", "#ff6f61", "#85ff9e", "#76a5ff"];

// Fun Facts für die Erde
const facts = [
  "Die Erde ist ca. 4,54 Milliarden Jahre alt.",
  "Es gibt schätzungsweise 3 Billionen Bäume auf der Erde.",
  "Die Erde hat eine Gesamtfläche von etwa 510 Millionen km².",
  "Der tiefste Punkt der Erde ist der Marianengraben mit 10.994 Metern unter dem Meeresspiegel.",
];

// Sterne-Klasse
class Star {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius * 2; // Verdoppelte Größe der Sterne
    this.color = color;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;
    this.twinkleSpeed = Math.random() * 0.05 + 0.02;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Sterne an den Rändern umkehren
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy = -this.dy;
    }

    // Funkeln der Sterne
    this.radius += Math.sin(Date.now() * this.twinkleSpeed) * 0.1;
    this.draw();
  }
}

// Sterne initialisieren
function initStars() {
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 2 + 2; // Basisgröße erhöht
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    stars.push(new Star(x, y, radius, color));
  }
}

// Animation der Sterne
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => star.update());
  requestAnimationFrame(animate);
}

// Canvas-Größe bei Fensteränderung anpassen
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Fun Facts in der HTML anzeigen (dynamisch als große Boxen)
function displayFacts() {
  const factContainer = document.getElementById("fact-section");
  facts.forEach((fact) => {
    const factBox = document.createElement("div");
    factBox.classList.add("fact-box");
    factBox.innerText = fact;
    factContainer.appendChild(factBox);
  });
}

// Initialisierung der Animation und Funktionsaufrufe
initStars();
animate();
displayFacts();
