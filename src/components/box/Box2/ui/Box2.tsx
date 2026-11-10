import { observer } from "mobx-react-lite";
import { BoxUI } from "../../iu/BoxUI";
import { box2State } from "../model/box2State";

import { downHandler } from "../../../area/utils/drag/downHandler";
export const Box2 = observer(() => {
  return (
    <BoxUI
      id="b2"
      positionX={box2State.positionX}
      positionY={box2State.positionY}
      handlePointerDown={downHandler}
    />
  );
});
