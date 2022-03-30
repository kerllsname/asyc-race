import getCars from './getListOfCars';

export default async function updateNumOfCars() {
  const numField = document.querySelector('h2');
  const list = await getCars();
  const num = list.length;

  if (numField) {
    numField.innerHTML = `Garage(${num})`;
  }

  return num;
}
