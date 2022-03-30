/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import getCars from '../get-data/getListOfCars';
import CarDrive from './CarDrive';

export default async function start(button) {
  if (button.classList.contains('car-road__start')) {
    const carID = Number(button.id.match(/\d+/)[0]);
    const stopButton = document.getElementById(`stop-${carID}`);

    stopButton?.removeAttribute('disabled');
    button.setAttribute('disabled', true);
    startCar(carID);
  } else {
    const getAllCars = await getCars();

    for (let i = 0; i < getAllCars.length; i += 1) {
      startCar(getAllCars[i].id);
      const stopButton = document.getElementById(`stop-${getAllCars[i].id}`);
      const startButton = document.getElementById(`start-${getAllCars[i].id}`);

      stopButton?.removeAttribute('disabled');
      startButton?.setAttribute('disabled', 'true');
    }
  }
}

function resetListener(carDrive: CarDrive) {
  const resetButton = document.querySelector<HTMLButtonElement>(
    '.func-buttons__reset'
  );

  resetButton?.addEventListener('click', () => carDrive.stopCar());
}

function startCar(carID: number) {
  const carDrive = new CarDrive(carID);

  resetListener(carDrive);
  carDrive.startAnimation();
}
