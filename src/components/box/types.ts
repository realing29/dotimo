import type { BoxColors } from "./const";

export type box1IdType = "b1";
export type box2IdType = "b2";
export type boxColorType = (typeof BoxColors)[keyof typeof BoxColors];
