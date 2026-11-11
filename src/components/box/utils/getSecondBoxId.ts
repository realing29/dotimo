import { BOX_1_ID, BOX_2_ID } from "../const";
import type { box1IdType, box2IdType } from "../types";

export const getSecondBoxId = (id: box1IdType | box2IdType) => {
  return { [BOX_1_ID]: BOX_2_ID, [BOX_2_ID]: BOX_1_ID }[id];
};
