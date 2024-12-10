// Select all buttons
const buttons = document.querySelectorAll('.key');

// Play sound based on the data-key
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const button = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (audio) {
    audio.currentTime = 0; 
    audio.play(); 

    // Add visual feedback to the button
   
  }
}

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const keyCode = button.getAttribute('data-key');
    playSound(keyCode);
  });
});

// Add keydown event listener to play sound on key press
document.addEventListener('keydown', event => {
  playSound(event.keyCode);
});
