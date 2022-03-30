/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import initializeCarBlock from '../init-blocks/initCarBlock';
import getCars from './getListOfCars';

export default function renderListOfCars() {
  deleteCarsBlocks();
  createCarsBlocks();
}

function deleteCarsBlocks() {
  const blocks = document.querySelectorAll<HTMLElement>('.garage__car-block');

  blocks.forEach((block) => {
    block.remove();
  });
}

async function createCarsBlocks() {
  const cars = await getCars();

  for (let i = 1; i <= cars.length; i += 1) {
    initializeCarBlock(cars[i - 1].name, cars[i - 1].color, cars[i - 1].id);
  }
}
