import {
  BOX_SIZE,
  DEFAULT_COLOR,
  DEFAULT_POSITION_X,
  DEFAULT_POSITION_Y,
} from "../const";
import cls from "./Box.module.scss";
import cn from "classnames";

type Props = {
  id?: string;
  positionX: number;
  positionY: number;
  handlePointerDown: React.PointerEventHandler<HTMLDivElement> | undefined;

  color?: "yellow" | "green" | "red";
};

export const BoxUI = ({
  id,
  color = DEFAULT_COLOR,
  positionX = DEFAULT_POSITION_X,
  positionY = DEFAULT_POSITION_Y,
  handlePointerDown,
}: Props) => {
  return (
    <div
      id={id}
      className={cn(cls.root, cls[color])}
      style={{
        width: BOX_SIZE,
        height: BOX_SIZE,
        transform: `translate(${positionX}px, ${positionY}px)`,
      }}
      onPointerDown={handlePointerDown}
      onDrag={() => false}
    />
  );
};
