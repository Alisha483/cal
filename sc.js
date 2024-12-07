let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
document.getElementById('celebrateBtn').addEventListener('click', createConfetti);

function createConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  
  // Emojis to use as confetti
  const emojis = ['🎉', '🎊', '✨', '💥', '🎈', '🌟', '💫'];
  
  // Number of confetti pieces to generate
  const numberOfConfetti = 100;
  
  // Loop through and create emoji confetti elements
  for (let i = 0; i < numberOfConfetti; i++) {
    const confettiPiece = document.createElement('div');
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]; // Random emoji
    
    confettiPiece.classList.add('confetti');
    confettiPiece.innerText = emoji;
    
    // Random position, size, duration, and delay for each confetti
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.top = Math.random() * 100 + '%';
    confettiPiece.style.fontSize = Math.random() * 20 + 20 + 'px';
    confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
    confettiPiece.style.animationDelay = Math.random() * 2 + 's';
    
    confettiContainer.appendChild(confettiPiece);
  }
  
  // Remove confetti after animation ends
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000); // Adjust the timeout to the duration of the animation
}
