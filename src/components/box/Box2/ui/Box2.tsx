import { observer } from "mobx-react-lite";
import { BoxUI } from "../../iu/BoxUI";
import { box2State } from "../model/box2State";

import { downHandler } from "../../../area/utils/drag/downHandler";
import { BOX_2_ID, BOX_2_INITIAL_X, BOX_2_INITIAL_Y } from "../../const";
import { choiceColorState } from "../../../choiceColor/model/choiceColorState";

export const Box2 = observer(() => {
  return (
    <BoxUI
      id="b2"
      color={box2State.color}
      positionX={BOX_2_INITIAL_X}
      positionY={BOX_2_INITIAL_Y}
      isTransition={box2State.isTransition}
      isActive={choiceColorState.boxId === BOX_2_ID}
      handlePointerDown={downHandler}
      onSimpleClick={() => choiceColorState.setBoxId(BOX_2_ID)}
    />
  );
});
