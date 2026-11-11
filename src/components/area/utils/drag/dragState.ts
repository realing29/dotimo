import { makeAutoObservable } from "mobx";
import type { box1IdType, box2IdType } from "../../../box/types";
import { getSecondBoxId } from "../../../box/utils/getSecondBoxId";

class DragState {
  shiftX = 0;
  shiftY = 0;

  idItemDragable: box1IdType | box2IdType | null = null;
  idItemSecond: box1IdType | box2IdType | null = null;

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
    this.idItemSecond = null;
    this.secondBlockLeftOffset = 0;
    this.secondBlockTopOffset = 0;
  }
  setShift(x: number, y: number) {
    this.shiftX = x;
    this.shiftY = y;
  }
  setIdDragable(id: box1IdType | box2IdType | null) {
    this.idItemDragable = id;
    if (!id) return;
    this.idItemSecond = getSecondBoxId(id);
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
