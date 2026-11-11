import type { box1IdType, box2IdType } from "../types";

export const setPosition = (
  id: box1IdType | box2IdType | null,
  x: number,
  y: number,
) => {
  if (!id) return;
  const boxNode = document.querySelector(`#${id}`) as HTMLDivElement;
  boxNode.style.setProperty("--x", String(x) + "px");
  boxNode.style.setProperty("--y", String(y) + "px");
};
