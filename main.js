document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const numbersContainer = document.getElementById('numbers');
  const themeSwitchBtn = document.getElementById('theme-switch-btn');

  // Theme switch functionality
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  themeSwitchBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
      theme = 'dark';
    }
    localStorage.setItem('theme', theme);
  });


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
