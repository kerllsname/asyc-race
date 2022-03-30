/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */

export default function selectThisCar({ currentTarget: button }) {
  const nameInput = document.querySelector<HTMLInputElement>(
    '.update-car-form__input'
  );
  const colorInput = document.querySelector<HTMLInputElement>(
    '.update-car-form__color-input'
  );

  if (nameInput && colorInput) {
    const carID = Number(button.id.match(/\d+/)[0]);

    fillInputThisCar(nameInput, colorInput, carID);
    localStorage.setItem('id', `${carID}`);
  }
}

async function fillInputThisCar(
  nameInput: HTMLInputElement,
  colorInput: HTMLInputElement,
  id: number
) {
  const carBlock = document.getElementById(`block-${id}`);
  const carColor = await getCarReq(id);

  if (carBlock) {
    const paragraph = carBlock.querySelector<HTMLElement>('p');

    if (paragraph) {
      const name: string = paragraph.innerHTML;

      nameInput.value = name;
      colorInput.value = carColor.color;
    }
  }
}

async function getCarReq(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'GET',
  });
  const result = await response.json();

  return result;
}
