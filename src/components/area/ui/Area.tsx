import { Box1 } from "../../box/Box1/ui/Box1";
import { Box2 } from "../../box/Box2/ui/Box2";
import { AREA_SIZE } from "../const";
import cls from "./Area.module.scss";

export const Area = () => {
  return (
    <div
      id="area"
      style={{ width: AREA_SIZE, height: AREA_SIZE }}
      className={cls.root}
    >
      <Box1 />
      <Box2 />
    </div>
  );
};
