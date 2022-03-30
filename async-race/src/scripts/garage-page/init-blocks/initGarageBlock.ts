/* eslint-disable @typescript-eslint/no-use-before-define */
export default function initializeGarage() {
  render();
}

function render() {
  const body = document.querySelector<HTMLElement>('body');
  const garage = document.createElement('div');
  const title = document.createElement('h2');
  const pageTitle = document.createElement('h3');

  garage.className = 'garage';

  title.innerHTML = 'Garage';
  pageTitle.innerHTML = 'Page';

  if (body) {
    body.appendChild(garage);
    garage.appendChild(title);
    garage.appendChild(pageTitle);
  }
}
