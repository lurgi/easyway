import { create } from "zustand";
import { upDownDivid } from "./utils";

type Direction = number[];
export type DirectionLine = [Direction, Direction];

interface DirectionStore {
  isDirectionLoad: boolean;
  directions?: Direction[];
  upDirections?: DirectionLine[];
  downDirection?: DirectionLine[];
  setDirection: (directions: Direction[]) => void;
  setDirectionLoad: (bol: boolean) => void;
  setUpDownDirection: (
    upDirections: DirectionLine[],
    downDirction: DirectionLine[]
  ) => void;
}

const directionStore = create<DirectionStore>((set) => ({
  isDirectionLoad: false,
  directions: undefined,
  upDirections: undefined,
  downDirection: undefined,
  setDirection: (directions) => set(() => ({ directions })),
  setDirectionLoad: (bol) => {
    set(() => ({
      isDirectionLoad: bol,
    }));
  },
  setUpDownDirection: (upDirections, downDirction) => {
    set(() => ({ upDirections, downDirction }));
  },
}));

export default directionStore;
