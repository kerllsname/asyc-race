/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import getNames from '../models-and-names/names';
import getModels from '../models-and-names/models';
import updateNumOfCars from './updateNumOfCars';
import renderListOfCars from './renderListOfCars';

export default function generateListOfCars() {
  buttonListener();
  updateNumOfCars();
}

function buttonListener() {
  const generateButton = document.querySelector<HTMLElement>(
    '.func-buttons__generate'
  );

  if (generateButton) {
    generateButton.addEventListener('click', handler);
  }
}

async function handler() {
  const length = await updateNumOfCars();

  createUniqueCars(length);
}

function createUniqueCars(length: number) {
  const start = length + 1;
  const limit = length + 100;

  for (let i = start; i <= limit; i += 1) {
    const car: object = {
      name: getRandomName(),
      color: createUniqueColor(),
    };

    postReq(car);
  }

  renderListOfCars();
  updateNumOfCars();
}

function getRandomName() {
  const names: Array<string> = getNames();
  const models: Array<string> = getModels();
  const name = names[Math.floor(Math.random() * names.length)];
  const model = models[Math.floor(Math.random() * models.length)];

  return `${name} ${model}`;
}

function createUniqueColor() {
  const data = '0123456789ABCDEF';
  let result = '#';

  for (let i = 0; i < 6; i += 1) {
    result += data[Math.floor(Math.random() * 16)];
  }

  return result;
}

async function postReq(car: object) {
  const response = await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  const result = await response.json();

  return result;
}
