import { downHandler } from "../../../area/utils/drag/downHandler";
import { BoxUI } from "../../iu/BoxUI";
import { box1State } from "../model/box1State";
import { observer } from "mobx-react-lite";
export const Box1 = observer(() => {
  return (
    <BoxUI
      id="b1"
      positionX={box1State.positionX}
      positionY={box1State.positionY}
      handlePointerDown={downHandler}
    />
  );
});
