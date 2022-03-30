/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import renderListOfCars from './renderListOfCars';

export default function updateCar() {
  const nameInput = document.querySelector<HTMLInputElement>(
    '.update-car-form__input'
  );
  const colorInput = document.querySelector<HTMLInputElement>(
    '.update-car-form__color-input'
  );

  if (nameInput && colorInput && nameInput.value) {
    updateThisCar(nameInput, colorInput);
    nameInput.value = '';
    renderListOfCars();
  }
}

function updateThisCar(
  nameInput: HTMLInputElement,
  colorInput: HTMLInputElement
) {
  if (nameInput.value !== '') {
    const car: object = {
      name: nameInput.value,
      color: colorInput.value,
    };

    putReq(car);
  }
}

async function putReq(car: object) {
  const id = localStorage.getItem('id');

  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  const result = await response.json();

  localStorage.clear();

  return result;
}
