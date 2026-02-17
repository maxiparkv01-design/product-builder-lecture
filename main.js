document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const numbersContainer = document.getElementById('numbers');

  generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
  });

  function generateLottoNumbers() {
    numbersContainer.innerHTML = ''; // Clear previous numbers
    const numbers = new Set();

    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    });
  }
});
