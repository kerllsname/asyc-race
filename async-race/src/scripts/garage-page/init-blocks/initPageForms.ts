/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import createCar from '../get-data/createCar';
import updateCar from '../get-data/updateCar';

export default function initializePageForms() {
  render();
}

function render() {
  const body = document.querySelector<HTMLElement>('body');
  const pageForms = document.createElement('div');
  const createCarForm = document.createElement('form');
  const updateCarForm = document.createElement('form');

  pageForms.className = 'page-forms';
  createCarForm.className = 'page-forms__create-car-form';
  updateCarForm.className = 'page-forms__update-car-form';

  if (body) {
    body.appendChild(pageForms);
    pageForms.appendChild(createCarForm);
    pageForms.appendChild(updateCarForm);

    fillForm('create-car-form', createCarForm);
    fillForm('update-car-form', updateCarForm);
  }

  createButtonListener();
  updateButtonListener();
}

function fillForm(name: string, elementName: HTMLElement) {
  const input = document.createElement('input');
  const colorButton = document.createElement('input');
  const applyButton = document.createElement('button');

  colorButton.type = 'color';
  applyButton.type = 'button';

  input.className = `${name}__input`;
  colorButton.className = `${name}__color-input`;
  applyButton.className = `${name}__apply-button`;

  if (name === 'create-car-form') {
    applyButton.innerHTML = 'create';
  } else {
    applyButton.innerHTML = 'update';
  }

  elementName.appendChild(input);
  elementName.appendChild(colorButton);
  elementName.appendChild(applyButton);
}

function createButtonListener() {
  const createButton = document.querySelector<HTMLElement>(
    '.create-car-form__apply-button'
  );

  if (createButton) {
    createButton.addEventListener('click', createCar);
  }
}

function updateButtonListener() {
  const updateButton = document.querySelector<HTMLElement>(
    '.update-car-form__apply-button'
  );

  if (updateButton) {
    updateButton.addEventListener('click', updateCar);
  }
}
