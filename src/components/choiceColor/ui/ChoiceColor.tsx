import cn from "classnames";
import { BOX_1_ID, BOX_2_ID, BoxColors } from "../../box/const";
import cls from "./ChoiceColor.module.scss";
import { TITLE } from "../const";
import { observer } from "mobx-react-lite";
import { choiceColorState } from "../model/choiceColorState";
import { box1State } from "../../box/Box1/model/box1State";
import { box2State } from "../../box/Box2/model/box2State";

const colors = Object.values(BoxColors);

export const ChoiceColor = observer(() => {
  if (choiceColorState.boxId === null) return null;

  const boxState = { [BOX_1_ID]: box1State, [BOX_2_ID]: box2State }[
    choiceColorState.boxId
  ];
  return (
    <div className={cls.root}>
      <div className={cls.title}>{TITLE}:</div>
      <div className={cls.colorsContainer}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => {
              boxState.setColor(color);
            }}
            className={cn(cls.color, cls[color], {
              [cls.active]: boxState.color === color,
            })}
          />
        ))}
      </div>
    </div>
  );
});
