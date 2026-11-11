import { BOX_SIZE } from "../../../box/const";
import type { box1IdType, box2IdType } from "../../../box/types";
import { getSecondBoxId } from "../../../box/utils/getSecondBoxId";
import { setPosition } from "../../../box/utils/setPosition";
import { AREA_SIZE } from "../../const";
import { dragState } from "./dragState";
import type { UniversalMouseEvent } from "../../../../types";

export const moveHandler: (e: UniversalMouseEvent) => void = (event) => {
  // Вычисление координат перемещения внутри поля
  const container = document.querySelector("#area") as HTMLElement;

  const containerRect = container.getBoundingClientRect();

  const newLeft = event.clientX - containerRect.left - dragState.shiftX;
  const newTop = event.clientY - containerRect.top - dragState.shiftY;

  const leftLimit =
    dragState.secondBlockLeftOffset < 0
      ? Math.abs(dragState.secondBlockLeftOffset)
      : 0;
  const topLimit =
    dragState.secondBlockTopOffset < 0
      ? Math.abs(dragState.secondBlockTopOffset)
      : 0;

  const leftMin = Math.max(leftLimit, newLeft);

  const topMin = Math.max(topLimit, newTop);

  const rightMax =
    AREA_SIZE -
    BOX_SIZE -
    (dragState.secondBlockLeftOffset > 0 ? dragState.secondBlockLeftOffset : 0);
  const bottomMax =
    AREA_SIZE -
    BOX_SIZE -
    (dragState.secondBlockTopOffset > 0 ? dragState.secondBlockTopOffset : 0);

  const left = Math.min(leftMin, rightMax);

  const top = Math.min(topMin, bottomMax);

  // ================================================

  if (!dragState.idItemDragable) return;

  const secondBox = getSecondBoxNode(dragState.idItemDragable);

  if (!secondBox) return;
  // boxState.setPosition(left, top);
  setPosition(dragState.idItemDragable, left, top);

  const isOffsetDefined =
    dragState.secondBlockLeftOffset !== 0 ||
    dragState.secondBlockTopOffset !== 0;

  const secondRect = secondBox.getBoundingClientRect();
  const second_X = secondRect.left - containerRect.left;
  const second_Y = secondRect.top - containerRect.top;

  const abs_X = Math.abs(left - second_X);
  const abs_Y = Math.abs(top - second_Y);

  const isStuck = abs_X < BOX_SIZE && abs_Y < BOX_SIZE;

  if (!isOffsetDefined && (isStuck || dragState.isTogether)) {
    const secondLeftOffset = second_X - left;
    const secondTopOffset = second_Y - top;

    dragState.setSecondBlockOffset(secondLeftOffset, secondTopOffset);
    dragState.setTogether(true);
  }

  if (dragState.isTogether && isOffsetDefined) {
    const secondLeft = left + dragState.secondBlockLeftOffset;
    const secondTop = top + dragState.secondBlockTopOffset;
    setPosition(dragState.idItemSecond, secondLeft, secondTop);
  }
};

function getSecondBoxNode(idItemDrogable: box1IdType | box2IdType) {
  return document.querySelector(`#${getSecondBoxId(idItemDrogable)}`);
}
