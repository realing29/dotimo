import { makeAutoObservable } from "mobx/src/internal.js";

export class State {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
