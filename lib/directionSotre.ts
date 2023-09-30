import { create } from "zustand";

type Direction = number[];
export interface DirectionLine {
  str: Direction;
  end: Direction;
  inclination: number;
}

interface DirectionStore {
  isDirectionLoad: boolean;
  directions?: Direction[];
  upDirections?: DirectionLine[];
  downDirections?: DirectionLine[];
  setDirection: (directions: Direction[]) => void;
  setDirectionLoad: (bol: boolean) => void;
  setUpDownDirection: ({
    upDirections,
    downDirections,
  }: {
    upDirections: DirectionLine[];
    downDirections: DirectionLine[];
  }) => void;
}

const directionStore = create<DirectionStore>((set) => ({
  isDirectionLoad: false,
  directions: undefined,
  upDirections: undefined,
  downDirections: undefined,
  setDirection: (directions) => set(() => ({ directions })),
  setDirectionLoad: (bol) => {
    set(() => ({
      isDirectionLoad: bol,
    }));
  },
  setUpDownDirection: ({ upDirections, downDirections }) => {
    set(() => ({ upDirections, downDirections }));
  },
}));

export default directionStore;
