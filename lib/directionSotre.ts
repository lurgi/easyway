import { create } from "zustand";

type Direction = number[];

interface DirectionStore {
  isDirectionLoad: boolean;
  directions?: Direction[];
  setDirection: (directions: Direction[]) => void;
  setDirectionLoad: (bol: boolean) => void;
}

const directionStore = create<DirectionStore>((set) => ({
  isDirectionLoad: false,
  directions: undefined,
  setDirection: (directions) =>
    set(() => ({
      directions,
    })),
  setDirectionLoad: (bol) => {
    set(() => ({
      isDirectionLoad: bol,
    }));
  },
}));

export default directionStore;
