function playSound(e) {
  const beat = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!beat) return;
  key.classList.add("currentlyPlaying");
  beat.currentTime = 0;
  beat.play();
}

window.addEventListener("keydown", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("currentlyPlaying");
}
