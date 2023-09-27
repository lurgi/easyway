import { create } from "zustand";

interface ModalOpenStore {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  mode?: "departures" | "arrivals";
  modeChange: (value: "departures" | "arrivals" | undefined) => void;
}

const modalOpenStore = create<ModalOpenStore>((set) => ({
  isModalOpen: false,
  closeModal: () =>
    set(() => ({
      isModalOpen: false,
    })),
  openModal: () =>
    set({
      isModalOpen: true,
    }),
  mode: undefined,
  modeChange: (value) =>
    set(() => ({
      mode: value,
    })),
}));

export default modalOpenStore;
