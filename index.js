function playSound(e){
    const beat = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    beat.currentTime = 0;
    beat.play();
}

window.addEventListener('keydown', playSound);