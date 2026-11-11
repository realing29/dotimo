import { downHandler } from "../../../area/utils/drag/downHandler";
import { choiceColorState } from "../../../choiceColor/model/choiceColorState";
import { BOX_1_ID, BOX_1_INITIAL_X, BOX_1_INITIAL_Y } from "../../const";
import { BoxUI } from "../../iu/BoxUI";
import { box1State } from "../model/box1State";
import { observer } from "mobx-react-lite";

export const Box1 = observer(() => {
  return (
    <BoxUI
      id={BOX_1_ID}
      color={box1State.color}
      positionX={BOX_1_INITIAL_X}
      positionY={BOX_1_INITIAL_Y}
      isTransition={box1State.isTransition}
      isActive={choiceColorState.boxId === BOX_1_ID}
      handlePointerDown={downHandler}
      onSimpleClick={() => choiceColorState.setBoxId(BOX_1_ID)}
    />
  );
});
