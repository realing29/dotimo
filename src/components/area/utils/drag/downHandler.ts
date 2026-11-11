import { runInAction } from "mobx/src/internal.js";
import { dragState } from "./dragState";
import { upHandler } from "./upHandler";
import { moveHandler } from "./moveHandler";
import { BOX_1_ID, BOX_2_ID } from "../../../box/const";
import type { PointerEventHandler } from "react";

export const downHandler: PointerEventHandler<HTMLDivElement> = (event) => {
  const dragItem = event.target as HTMLElement;

  const itemRect = dragItem.getBoundingClientRect();

  const shiftX = event.clientX - itemRect.left;
  const shiftY = event.clientY - itemRect.top;

  runInAction(() => {
    dragState.setShift(shiftX, shiftY);
    if (dragItem.id === BOX_1_ID || dragItem.id === BOX_2_ID) {
      dragState.setIdDragable(dragItem.id);
    }
  });
  moveHandler(event);
  document.addEventListener("pointerup", upHandler);
  document.addEventListener("pointermove", moveHandler);
};
