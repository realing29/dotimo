import { box1State } from "../../../box/Box1/model/box1State";
import { box2State } from "../../../box/Box2/model/box2State";
import { BOX_SIZE } from "../../../box/const";
import type { BoxState } from "../../../box/model/boxState";
import { AREA_SIZE } from "../../const";
import { dragState } from "./dragState";

export const moveHandler: React.PointerEventHandler<HTMLDivElement> = (
  event,
) => {
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

  const [boxState, secondBoxState] = getBoxesStates(dragState.idItemDragable);

  if (!secondBox || !boxState) return;
  boxState.setPosition(left, top);

  const isOffsetDefined =
    dragState.secondBlockLeftOffset !== 0 ||
    dragState.secondBlockTopOffset !== 0;

  const secondRect = secondBox.getBoundingClientRect();
  const second_X = secondRect.left - containerRect.left;
  const second_Y = secondRect.top - containerRect.top;

  const abs_X = Math.abs(left - second_X);
  const abs_Y = Math.abs(top - second_Y);
  // console.log(abs_X, abs_Y);

  const isStuck = abs_X < BOX_SIZE && abs_Y < BOX_SIZE;

  if (!isOffsetDefined && (isStuck || dragState.isTogether)) {
    const secondLeftOffset = second_X - left;
    const secondTopOffset = second_Y - top;

    console.log(secondLeftOffset, secondTopOffset);
    dragState.setSecondBlockOffset(secondLeftOffset, secondTopOffset);
    dragState.setTogether(true);
  }

  if (dragState.isTogether && isOffsetDefined) {
    const secondLeft = left + dragState.secondBlockLeftOffset;
    const secondTop = top + dragState.secondBlockTopOffset;
    secondBoxState?.setPosition(secondLeft, secondTop);
  }

  // console.log(left, second_X, top, second_Y);
};

function getBoxesStates(idItemDrogable: string) {
  let boxState: BoxState | null = null;
  let secondBoxState: BoxState | null = null;
  if (idItemDrogable === "b1") {
    boxState = box1State;
    secondBoxState = box2State;
  } else if (idItemDrogable === "b2") {
    boxState = box2State;
    secondBoxState = box1State;
  }
  return [boxState, secondBoxState];
}

function getSecondBoxNode(idItemDrogable: string) {
  if (idItemDrogable === "b1") {
    return document.querySelector("#b2");
  } else if (idItemDrogable === "b2") {
    return document.querySelector("#b1");
  }
}
