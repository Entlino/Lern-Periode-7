# Lern-Periode-7

# Planung
## Noten
Aktueller Durchschnitt meines QV beträgt die Note 5. Mit dieser bin ich zufrieden möchte jedoch falls möglich mich eher in Richtung 5.5 bewegen.
## Lernen
In der Lernperiode 7 möchte ich ein Projekt umsetzten welches ich unteranderem bei der Bewerbung beifügen könnte. Je nach dem für welches Projekt ich mich schlussendlich entscheide würde ich mich beispielsweise in Python einarbeiten oder versuchen mir eine andere Programmiersprache grundlegend anzueignen.
## Projektvorschläge
### Chatbot
Ein Chatbot zu erstellen wäre eins der möglichen Projekte welches ich umsetzen möchte. Das ganze würde ich vorausschtlich mit Python realisieren, somit würde ich mich ersteinmal einarbeiten. Der Chatbot kann schlussendlich variieren, zum einen könnte man einen "einfacheren" Bot erstellen welcher mit API auf Informationsbibliotheken zugreifft (Wikipedia), zum anderen könnte ich je nach Zeit und Fähigkeiten noch versuchen in den Bot ein bereits erstelltes Machine-Learning-Modell einzubinden, dies wäre jedoch deutlich Fortgeschritten und eher ein weiteres Projekt für später.
### Desktopapp
Ein weiteres mögliches Projekt wäre die realisation einer Desktopapp welche ebenfalls mit Python umgesetzen werden würde. Der Inhalt dieser Desktopapp könnte beispielsweise einen Kalender oder eine ToDo-Liste beinhalten. Bei diesem Projekt wäre der Vorteil das dies vermutlich deutlich einfacher als der Chatbot wäre, somit hätte ich mehr Zeit mich in Python einzuarbeiten.
### Appentwicklung
Das nächte Projekt welches ich mir überlegt habe könnte eine App sein welche ich entwicklen möchte. Bei diesem Projekt könnte ich mich ebenfalls in eine neue Programmiersprache einarbeiten. Inhaltlich könnte diese App beispielsweise eine schlichte Notizenapp sein, oder ein einfaches Spiel.


## Tagesplanung
### 18.10.2024
- [ ] Einarbeitung Python

Heute habe ich nebst der Planung von der Lernperiode 7 mich erstmals in Python eingearbeitet. Das Projekt wurde noch nicht final definiert. Die Definition erfolgt am Montag nach einem Gespräch mit Herrn Colic bezüglich dem Thema Machnie Learing und dem potentiellem Austausch eines Modules.

## 25.10.2024
- [ ] Beginn JavaSkript
- [ ] Kleine "Lern/Demo" website bauen.

Today, I've begun to plan out my Project, whose direction was finalized after a discussion with Mr. Colic on Monday. As we discussed, we came to the point that it would be easier to put Python away for a Moment and wait until we have the opportunity to pick the modul m259, where learning python would be a bigger part. So his advice was to learn JavaScript because it's harder to learn and there aren't any good moduls that should help learn JavaScript. So after all of that, I came to the Point where I decided that my newest Project would be learning JavaScript. Today I began with the basics of learning JavaScript. After a little introduction to JavaScript, I spent the morning building a little Countdown website with JavaScript. The website should be able to take your input of how many seconds the countdown should count down and then actually count down.


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Countdown</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <input type="number" id="startSeconds" placeholder="Startsekunden" />
    <button id="startButton">Starte Countdown</button>
    <div id="countdown"></div>

    <script src="script.js"></script>
  </body>
</html>

```

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

#countdown {
  font-size: 3rem;
  color: #333;
}

input[type="number"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

```

```javascript
const startButton = document.getElementById("startButton");
const countdownElement = document.getElementById("countdown");
const startSecondsInput = document.getElementById("startSeconds");

startButton.addEventListener("click", () => {
  const startSeconds = parseInt(startSecondsInput.value);

  if (isNaN(startSeconds) || startSeconds <= 0) {
    alert("Bitte gib eine gültige Zahl größer als 0 ein.");
    return;
  }

  let timeLeft = startSeconds;

  countdownElement.textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Countdown beendet!";
    }
  }, 1000);
});

```

## 1.11.2024

Ich habe den Countdown weiter verbessert und habe nun eine Kreis animation hinzugefügt welche den stand des Timers Visuell darstellt.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Countdown Ring</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="setup">
      <label for="duration">Countdown-Dauer (in Minuten):</label>
      <input type="number" id="duration" min="1" placeholder="z.B. 5" />
      <button id="startButton">Start</button>
    </div>

    <div class="countdown-ring" style="display: none">
      <svg width="300" height="300">
        <circle cx="150" cy="150" r="140" class="background" />
        <circle cx="150" cy="150" r="140" class="progress" />
      </svg>
      <div class="time-left">00:00:00</div>
    </div>

    <script src="script.js"></script>
  </body>
</html>

```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.setup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  font-size: 1em;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

.countdown-ring {
  position: relative;
  width: 300px;
  height: 300px;
}

svg {
  transform: rotate(-90deg);
}

circle {
  fill: none;
  stroke-width: 15;
}

.background {
  stroke: #eee;
}

.progress {
  stroke: #76c7c0;
  stroke-dasharray: 880;
  stroke-dashoffset: 880;
  transition: stroke-dashoffset 1s linear;
}

.time-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #333;
}

```

```javascript
const startButton = document.getElementById("startButton");
const durationInput = document.getElementById("duration");
const timeLeftDisplay = document.querySelector(".time-left");
const progressCircle = document.querySelector(".progress");
const countdownRing = document.querySelector(".countdown-ring");
const circleLength = 880;
let countdownInterval;

startButton.addEventListener("click", () => {
  const duration = parseInt(durationInput.value) * 60 * 1000;

  if (isNaN(duration) || duration <= 0) {
    alert("Bitte eine gültige Zeit in Minuten eingeben.");
    return;
  }

  const countdownEnd = new Date().getTime() + duration;
  countdownRing.style.display = "block";
  document.querySelector(".setup").style.display = "none";

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownEnd - now;

    if (timeLeft > 0) {
      const seconds = Math.floor((timeLeft / 1000) % 60);
      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

      timeLeftDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      const progress = circleLength * (1 - timeLeft / duration);
      progressCircle.style.strokeDashoffset = circleLength - progress;
    } else {
      clearInterval(countdownInterval);
      timeLeftDisplay.textContent = "00:00:00";
      progressCircle.style.strokeDashoffset = circleLength;
    }
  }

  countdownInterval = setInterval(updateCountdown, 1000);
});

```
