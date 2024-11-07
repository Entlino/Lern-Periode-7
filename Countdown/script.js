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
