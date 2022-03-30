/* eslint-disable @typescript-eslint/no-use-before-define */
import start from '../drive/startAndRace';

export default function initializeFunctionalButtons() {
  render();
}

function render() {
  const body = document.querySelector<HTMLElement>('body');
  const funcButtons = document.createElement('div');
  const raceButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const generateButton = document.createElement('button');

  funcButtons.className = 'func-buttons';
  raceButton.className = 'func-buttons__race';
  resetButton.className = 'func-buttons__reset';
  generateButton.className = 'func-buttons__generate';

  raceButtonHandler(raceButton);

  raceButton.innerHTML = 'race';
  resetButton.innerHTML = 'reset';
  generateButton.innerHTML = 'generate';

  if (body) {
    body.appendChild(funcButtons);
    funcButtons.appendChild(raceButton);
    funcButtons.appendChild(resetButton);
    funcButtons.appendChild(generateButton);
  }
}

function raceButtonHandler(raceButton: HTMLElement) {
  raceButton.addEventListener('click', ({ currentTarget: button }) =>
    start(button)
  );
}
