import { makeAutoObservable, runInAction } from "mobx/src/internal.js";
import type { boxColorType } from "../types";

export class BoxState {
  color: boxColorType;
  isTransition: boolean = false;
  constructor(color: boxColorType) {
    this.color = color;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  activeteTransition() {
    this.isTransition = true;

    setTimeout(() => {
      runInAction(() => {
        this.isTransition = false;
      });
    }, 500);
  }
  setColor(color: boxColorType) {
    this.color = color;
  }
}
