import { Area } from "./components/area/ui/Area";
import cls from "./App.module.scss";
import { Separate } from "./components/separate/ui/Separate";
import { AREA_SIZE } from "./components/area/const";
import { ChoiceColor } from "./components/choiceColor/ui/ChoiceColor";

function App() {
  return (
    <div className={cls.root}>
      <Area />
      <div style={{ height: AREA_SIZE }} className={cls.control}>
        <ChoiceColor />
        <Separate />
      </div>
    </div>
  );
}

export default App;
