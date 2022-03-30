/* eslint-disable @typescript-eslint/no-use-before-define */
export default function initializePageButtons() {
  render();
}

function render() {
  const body = document.querySelector<HTMLElement>('body');
  const header = document.createElement('header');
  const pageButtons = document.createElement('nav');
  const garageButton = document.createElement('button');
  const winnersButton = document.createElement('button');

  pageButtons.className = 'header-nav';
  garageButton.className = 'header-nav__garage';
  winnersButton.className = 'header-nav__winners';

  garageButton.innerHTML = 'to garage';
  winnersButton.innerHTML = 'to winners';

  if (body) {
    body.appendChild(header);
    header.appendChild(pageButtons);
    pageButtons.appendChild(garageButton);
    pageButtons.appendChild(winnersButton);
  }
}
