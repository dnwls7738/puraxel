import { atom } from "recoil";

const modeState = atom({
  key: "mode",
  default: "Laser",
});

const modeState2 = atom({
  key: "mode2",
  default: "num1",
});

export { modeState, modeState2 };
