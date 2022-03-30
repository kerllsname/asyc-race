/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import renderListOfCars from './renderListOfCars';
import updateNumOfCars from './updateNumOfCars';

export default function createCar() {
  const nameInput = document.querySelector<HTMLInputElement>(
    '.create-car-form__input'
  );
  const colorInput = document.querySelector<HTMLInputElement>(
    '.create-car-form__color-input'
  );

  if (nameInput && colorInput) {
    createThisCar(nameInput, colorInput);
    nameInput.value = '';
  }
}

function createThisCar(
  nameInput: HTMLInputElement,
  colorInput: HTMLInputElement
) {
  if (nameInput.value) {
    const car: object = {
      name: nameInput.value,
      color: colorInput.value,
    };

    postReq(car);
    renderListOfCars();
    updateNumOfCars();
  }
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
