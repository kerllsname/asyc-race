/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import updateNumOfCars from './updateNumOfCars';

export default function removeThisCar({ currentTarget: button }) {
  const carID = Number(button.id.match(/\d+/)[0]);
  const carBlock = document.getElementById(`block-${carID}`);

  if (carBlock) {
    deleteReq(carID);
    carBlock.remove();
    updateNumOfCars();
  }
}

async function deleteReq(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();

  return result;
}
