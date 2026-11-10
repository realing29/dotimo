import { makeAutoObservable } from "mobx";

class DragState {
  shiftX = 0;
  shiftY = 0;

  idItemDragable: "b1" | "b2" | null = null;

  isTogether = false;

  secondBlockLeftOffset = 0;
  secondBlockTopOffset = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  reset() {
    this.shiftX = 0;
    this.shiftY = 0;
    this.idItemDragable = null;
    this.secondBlockLeftOffset = 0;
    this.secondBlockTopOffset = 0;
  }
  setShift(x: number, y: number) {
    this.shiftX = x;
    this.shiftY = y;
  }
  setIdDragable(id: "b1" | "b2" | null) {
    this.idItemDragable = id;
  }
  setTogether(bool: boolean) {
    this.isTogether = bool;
  }
  setSecondBlockOffset(x: number, y: number) {
    this.secondBlockLeftOffset = x;
    this.secondBlockTopOffset = y;
  }
}

export const dragState = new DragState();
