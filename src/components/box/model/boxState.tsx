import { makeAutoObservable } from "mobx/src/internal.js";

export class BoxState {
  positionX: number = 0;
  positionY: number = 0;
  constructor(x: number, y: number) {
    this.positionX = x;
    this.positionY = y;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setPosition(x: number, y: number) {
    this.positionX = x;
    this.positionY = y;
  }
}
