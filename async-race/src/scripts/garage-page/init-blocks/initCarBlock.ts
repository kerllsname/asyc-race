/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import start from '../drive/startAndRace';
import removeThisCar from '../get-data/removeCar';
import selectThisCar from '../get-data/selectCar';

export default function initializeCarBlock(
  name: string,
  color: string,
  id: number
) {
  createCarBlock(name, color, id);
}

function createCarBlock(name: string, color: string, id: number) {
  const garage = document.querySelector<HTMLElement>('.garage');

  const carBlock = document.createElement('div');

  const buttonsAndTitleBlock = document.createElement('div');
  const selectButton = document.createElement('button');
  const removeButton = document.createElement('button');
  const carTitle = document.createElement('p');

  const carAndRoad = document.createElement('div');
  const stopButton = document.createElement('button');
  const startButton = document.createElement('button');
  const car = document.createElement('div');
  const road = document.createElement('hr');

  carBlock.className = 'garage__car-block';
  carBlock.id = `block-${id}`;
  buttonsAndTitleBlock.className = 'garage__buttons-title';
  selectButton.className = 'btns-title__select';
  selectButton.id = `select-${id}`;
  removeButton.className = 'btns-title__remove';
  removeButton.id = `remove-${id}`;
  carTitle.className = 'btns-title__title';
  carAndRoad.className = 'garage__car-road';
  stopButton.className = 'car-road__stop';
  stopButton.id = `stop-${id}`;
  startButton.className = 'car-road__start';
  startButton.id = `start-${id}`;
  car.className = 'car-road__car';
  car.id = `car-${id}`;
  road.className = 'car-road__road';

  selectButton.innerHTML = 'select';
  removeButton.innerHTML = 'remove';
  carTitle.innerHTML = `${name}`;
  stopButton.innerHTML = 'A';
  startButton.innerHTML = 'B';
  car.innerHTML = insertCarSVG(`${color}`);

  if (garage) {
    garage.appendChild(carBlock);

    carBlock.appendChild(buttonsAndTitleBlock);
    buttonsAndTitleBlock.appendChild(selectButton);
    buttonsAndTitleBlock.appendChild(removeButton);
    buttonsAndTitleBlock.appendChild(carTitle);

    carBlock.appendChild(carAndRoad);
    carAndRoad.appendChild(stopButton);
    carAndRoad.appendChild(startButton);
    carAndRoad.appendChild(car);
    carAndRoad.appendChild(road);
  }

  removeButtonListener(removeButton);
  selectButtonListener(selectButton);
  startButtonListener(startButton);
  // stopButtonListener(stopButton);
}

function insertCarSVG(color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20.07 20.07">
  <path stroke="#fff" stroke-width="0.1" style="fill:${color};" d="M20.07,10.102c0,0-0.719-1.593-5.363-1.53c0,0-4.626-4.644-13.986,0.582
                      c0,0,0.205,1.018-0.566,1.018c-0.159,0.765-0.322,1.769,0.203,2.294c1.146,0,1.257,0,1.266,0c-0.028-0.123-0.044-0.25-0.044-0.381
                      c0-0.951,0.771-1.722,1.722-1.722s1.722,0.771,1.722,1.722c0,0.131-0.016,0.258-0.044,0.381h0.268h8.357h1.119
                      c-0.027-0.123-0.043-0.25-0.043-0.381c0-0.951,0.771-1.722,1.721-1.722c1.297,0,2.037,1.318,1.906,2.092l1.762-0.182
                      C19.801,10.687,20.07,10.102,20.07,10.102z M6.936,8.835H2.829c0,0,1.703-0.798,4.107-1.261V8.835z M7.827,8.835V7.427
                      c3.442-0.498,6.143,1.408,6.143,1.408H7.827z" />
  <path stroke="#fff" stroke-width="0.1" style="fill:#211e1e;"
    d="M16.402,10.742c-0.734,0-1.33,0.595-1.33,1.33c0,0.733,0.596,1.329,1.33,1.329
                      s1.514-0.596,1.514-1.329C17.916,11.336,17.137,10.742,16.402,10.742z M16.402,12.582c-0.283,0-0.512-0.229-0.512-0.511
                      s0.229-0.512,0.512-0.512c0.281,0,0.512,0.229,0.512,0.512C16.914,12.353,16.683,12.582,16.402,12.582z" />
  <path stroke="#fff" stroke-width="0.1" style="fill:#211e1e;"
    d="M3.268,10.742c-0.734,0-1.329,0.595-1.329,1.33c0,0.733,0.595,1.329,1.329,1.329
                      c0.735,0,1.33-0.596,1.33-1.329C4.597,11.336,4.003,10.742,3.268,10.742z M3.268,12.582c-0.282,0-0.512-0.229-0.512-0.511
                      s0.23-0.512,0.512-0.512s0.512,0.229,0.512,0.512C3.78,12.353,3.55,12.582,3.268,12.582z" />
</svg>`;

  return svg;
}

function removeButtonListener(removeButton: HTMLElement) {
  removeButton.addEventListener('click', removeThisCar);
}

function selectButtonListener(selectButton: HTMLElement) {
  selectButton.addEventListener('click', selectThisCar);
}

function startButtonListener(startButton: HTMLElement) {
  startButton.addEventListener('click', ({ currentTarget: button }) =>
    start(button)
  );
}

// function stopButtonListener(button: HTMLElement) {
//   button.addEventListener('click', stopCar);
// }
