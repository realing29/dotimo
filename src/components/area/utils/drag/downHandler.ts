import { runInAction } from "mobx/src/internal.js";
import { dragState } from "./dragState";
import { upHandler } from "./upHandler";
import { moveHandler } from "./moveHandler";

export const downHandler: React.PointerEventHandler<HTMLDivElement> = (
  event,
) => {
  const dragItem = event.target as HTMLElement;

  const itemRect = dragItem.getBoundingClientRect();

  const shiftX = event.clientX - itemRect.left;
  const shiftY = event.clientY - itemRect.top;

  runInAction(() => {
    dragState.setShift(shiftX, shiftY);
    if (dragItem.id === "b1" || dragItem.id === "b2") {
      dragState.setIdDragable(dragItem.id);
    }
  });
  moveHandler(event);
  document.addEventListener("pointerup", upHandler);
  document.addEventListener("pointermove", moveHandler);
};
