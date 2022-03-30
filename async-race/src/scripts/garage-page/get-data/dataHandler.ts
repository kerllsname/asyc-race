/* eslint-disable @typescript-eslint/no-use-before-define */
import renderListOfCars from './renderListOfCars';
import generateListOfCars from './generateCars';

export default function getData() {
  dataHandler();
}

function dataHandler() {
  renderListOfCars();
  generateListOfCars();
}
