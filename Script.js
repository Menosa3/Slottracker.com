document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('slotDataForm');
  const slotDataList = document.getElementById('slotDataList');
  const savedData = JSON.parse(localStorage.getItem('slotData')) || [];

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const game = document.getElementById('game').value;
    const result = document.getElementById('result').value;

    const listItem = document.createElement('li');
    listItem.textContent = `Game: ${game}, Result: ${result}`;
    slotDataList.appendChild(listItem);

    savedData.push({ game, result });
    localStorage.setItem('slotData', JSON.stringify(savedData));

    form.reset();
  });

  savedData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Game: ${data.game}, Result: ${data.result}`;
    slotDataList.appendChild(listItem);
  });
});
