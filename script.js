const saveEl = document.getElementById('save-el');
const countEl = document.getElementById('count-el');
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  const countStr = `${count} - `;
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// Google:
// innerText alternative mdn

const incremented = document.querySelector('#increment-btn');
incremented.onclick = increment;

const savedButton = document.querySelector('#save-btn');
savedButton.onclick = save;
