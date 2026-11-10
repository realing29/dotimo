import { dragState } from "./dragState";
import { moveHandler } from "./moveHandler";

export const upHandler: React.PointerEventHandler<HTMLDivElement> = (
  _event,
) => {
  dragState.reset();
  document.removeEventListener("pointerup", upHandler);
  document.removeEventListener("pointermove", moveHandler);
};
