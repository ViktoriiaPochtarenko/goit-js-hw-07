function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');



createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    elements.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`);
    size += 10;
  }

  boxesContainer.innerHTML = elements.join('');
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}