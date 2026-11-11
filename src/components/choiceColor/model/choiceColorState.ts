import { makeAutoObservable } from "mobx";
import type { box1IdType, box2IdType } from "../../box/types";

class ChoiceColorState {
  boxId: box1IdType | box2IdType | null = null;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setBoxId(id: box1IdType | box2IdType | null) {
    if (this.boxId === id) this.boxId = null;
    else this.boxId = id;
  }
}

export const choiceColorState = new ChoiceColorState();
