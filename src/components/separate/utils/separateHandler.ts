import { getRandomInt } from "../../../utils/getRandomInt";
import { AREA_SIZE } from "../../area/const";
import { dragState } from "../../area/utils/drag/dragState";
import { box1State } from "../../box/Box1/model/box1State";
import { box2State } from "../../box/Box2/model/box2State";
import { BOX_1_ID, BOX_2_ID, BOX_SIZE } from "../../box/const";
import { setPosition } from "../../box/utils/setPosition";

export const separateHandler = () => {
  box1State.activeteTransition();
  box2State.activeteTransition();

  const [box1X, box1Y, box2X, box2Y] = randomCoords();

  setPosition(BOX_1_ID, box1X, box1Y);
  setPosition(BOX_2_ID, box2X, box2Y);

  dragState.setTogether(false);
};

const randomCoords = () => {
  const gap = 120;
  const min = 0;
  const max = AREA_SIZE - BOX_SIZE;
  const minX = min;
  const minY = min;
  const maxX = max;
  const maxY = max;

  const box1X = getRandomInt(minX, maxX);
  const box1Y = getRandomInt(minY, maxY);

  const box2X = getRandomInt(minX, maxX);
  const box2Y = getRandomInt(minY, maxY);

  const isXValid = Math.abs(box1X - box2X) > gap;
  const isYValid = Math.abs(box1Y - box2Y) > gap;

  if (isXValid && isYValid) return [box1X, box1Y, box2X, box2Y];
  return randomCoords();
};
