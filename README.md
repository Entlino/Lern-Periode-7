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


## 08.11.2024

Heute habe ich wie die letzen Wochen an meinem Countdown gearbeitet. Heute habe ich erstmals damit begonnen die Website ansprechender zu gestalten. Als ich dies erledigt habe habe ich mich wieder um den Countdown gekümmert, bei welchem ich den Kreis welcher den Countdown visuell darstellt angepasst damit dieser nun in unterschiedlichen Fraben erscheint. Die Farben sind je nach übrigbleibender Zeit anders.

![image](https://github.com/user-attachments/assets/786f7b19-ebb4-4e8e-a0be-bca590d5750f)

![image](https://github.com/user-attachments/assets/3a5d6ef0-bdab-48f4-ac91-c9b2c33eb972)

![image](https://github.com/user-attachments/assets/07eb1f9b-36fb-4234-9274-ab9c030a9ee6)



## 15.11.2024

Heute habe ich ein neues Projekt begonnen, welches anspruchsvoller ist als die Countdown-Website, und zwar bin ich an einer Website am Arbeiten, bei welcher man im All startet, und dann zur Erde "runterscrollen" kann. Um auf diesem Weg nicht gelangweilt zu sein, gibt es im Hintergrund animierte farbige Bälle, welche herumschwirren, und im Vordergrund gibt es Informationen und Fakten über die Erde, wie beispielsweise die aktuelle Weltbevölkerung. Diese wollte ich zuerst via API jederzeit aktuell auslesen, jedoch hat mir das relativ lange Problem bereitet, wieso ich diesen Schritt erstmals übersprungen und eine Zahl eingeschrieben habe. Dies möchte ich jedoch später nochmals ändern. Wenn man nun am Ende seiner Reise zur Erde angekommen ist, sollte man wie in Google Maps die Erde sehen. Also zuerst diese Halbkugel und dann, wenn man weiter scrollt, soll automatisch auf den eigenen Standort gezoomt werden, welcher vorher ausgelesen werden soll. Wie und ob das Ganze überhaupt so möglich ist, muss ich erstmals noch schauen. 




## 22.11.2024

Heute habe ich weiterhin an meiner Website "Die Reise zur Erde" gearbeitet, dabei konnte ich endlich den Fortschritt erzielen das am ende meiner Website die Erde als Sphäre mit einer Textur entstand.

## 29.11.2024

So today, i've reworked my former project "Reise zur Erde" to "Sonnensystem" in this newer projekt, the goal isn't to reach the earth and learn something about it. It's to start at the end of our solarsystem and reach down for the sun, on your way down there, your gonna pass all the other planets in our solarsystem and learn something about them. A more detailed, explantion is in my Video documentary.
