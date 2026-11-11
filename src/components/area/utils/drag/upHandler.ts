import type { UniversalMouseEvent } from "../../../../types";
import { dragState } from "./dragState";
import { moveHandler } from "./moveHandler";

export const upHandler: (e: UniversalMouseEvent) => void = (_event) => {
  dragState.reset();
  document.removeEventListener("pointerup", upHandler);
  document.removeEventListener("pointermove", moveHandler);
};
