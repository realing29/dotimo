import { observer } from "mobx-react-lite";
import { SEPARATE_TITLE } from "../const";

import cls from "./Separate.module.scss";
import { dragState } from "../../area/utils/drag/dragState";
import { separateHandler } from "../utils/separateHandler";

export const Separate = observer(() => {
  return (
    dragState.isTogether && (
      <button onClick={separateHandler} className={cls.root}>
        {SEPARATE_TITLE}
      </button>
    )
  );
});
