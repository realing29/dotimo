import type { PointerEventHandler } from "react";
import {
  BOX_SIZE,
  DEFAULT_COLOR,
  DEFAULT_POSITION_X,
  DEFAULT_POSITION_Y,
  TIME_TRANSITION_MS,
} from "../const";
import type { boxColorType } from "../types";
import cls from "./BoxUI.module.scss";
import cn from "classnames";

type Props = {
  id?: string;
  positionX: number;
  positionY: number;
  isTransition: boolean;
  isActive: boolean;
  handlePointerDown: PointerEventHandler<HTMLDivElement>;
  onSimpleClick: () => void;

  color?: boxColorType;
};
let lastCoors: { x: number; y: number } = { x: 0, y: 0 };

export const BoxUI = ({
  id,
  color = DEFAULT_COLOR,
  positionX = DEFAULT_POSITION_X,
  positionY = DEFAULT_POSITION_Y,
  isTransition = false,
  isActive,
  handlePointerDown,
  onSimpleClick,
}: Props) => {
  return (
    <div
      id={id}
      className={cn(cls.root, cls[color as string], {
        [cls.transition]: isTransition,
        [cls.active]: isActive,
      })}
      style={{
        width: BOX_SIZE,
        height: BOX_SIZE,
        transform: `translate(var(--x, ${positionX}px), var(--y, ${positionY}px))`,
        "--transition-time": TIME_TRANSITION_MS,
      }}
      onPointerDown={handlePointerDown}
      onDrag={() => false}
      onMouseDown={(e) => {
        lastCoors.x = e.clientX;
        lastCoors.y = e.clientY;
      }}
      onMouseUp={(e) => {
        if (lastCoors.x === e.clientX && lastCoors.y === e.clientY)
          onSimpleClick();
      }}
    />
  );
};
