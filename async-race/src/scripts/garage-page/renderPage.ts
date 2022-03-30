/* eslint-disable @typescript-eslint/no-use-before-define */
import initializePageButtons from './init-blocks/initPagesButtons';
import initializePageForms from './init-blocks/initPageForms';
import initializeFunctionalButtons from './init-blocks/initFunctionalButtons';
import initializeGarage from './init-blocks/initGarageBlock';
import getData from './get-data/dataHandler';

export default function initializeGaragePage() {
  renderPage();
  getData();
}

function renderPage() {
  initializePageButtons();
  initializePageForms();
  initializeFunctionalButtons();
  initializeGarage();
}
