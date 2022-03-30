/* eslint-disable operator-linebreak */
/* eslint-disable class-methods-use-this */
import startReq from './startReq';
import engineWorking from './driveReq';
import stopReq from './stopReq';

export default class CarDrive {
  timer!: NodeJS.Timer;

  engineWorking: boolean;

  stopped: boolean;

  id: number;

  constructor(id: number) {
    this.engineWorking = true;
    this.stopped = false;
    this.id = id;
  }

  async startAnimation() {
    const data = await startReq(this.id);
    this.driveAnimation(data);
    this.driveMod();
    this.stopButtonListener();
  }

  driveAnimation(data: { velocity: number }) {
    const speed: number = data.velocity;
    const intervalTime = 0.02;
    const distance = speed * intervalTime;

    let currentDistance = 0;

    this.timer = setInterval(() => {
      if (
        this.stopped ||
        !this.checkDistance(currentDistance) ||
        !this.engineWorking
      ) {
        clearInterval(this.timer);

        return;
      }

      currentDistance += distance;

      this.position(currentDistance);
    }, 20);
  }

  checkDistance(currentDistance: number) {
    const screenWidth = document.documentElement.clientWidth;

    if (currentDistance >= screenWidth - 100) {
      return false;
    }

    return true;
  }

  position(currentDistance: number) {
    const car = document.getElementById(`car-${this.id}`);

    if (car) {
      car.style.left = `${currentDistance}px`;
    }
  }

  async driveMod() {
    this.engineWorking = await engineWorking(this.id);
  }

  stopButtonListener() {
    const button = document.getElementById(`stop-${this.id}`);

    button?.addEventListener('click', () => this.stopCar());
  }

  async stopCar() {
    const stopButton = document.getElementById(`stop-${this.id}`);
    const startButton = document.getElementById(`start-${this.id}`);

    stopButton?.setAttribute('disabled', 'true');
    startButton?.removeAttribute('disabled');
    this.stopped = await stopReq(this.id);

    this.position(0);
  }
}
