import { create } from "zustand";

interface ModalOpenState {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  mode: string;
  modeChange: (value: "departures" | "arrivals" | undefined) => void;
}

const modalOpenState = create<ModalOpenState>((set) => ({
  isModalOpen: false,
  closeModal: () =>
    set(() => ({
      isModalOpen: false,
    })),
  openModal: () =>
    set({
      isModalOpen: true,
    }),
  mode: "",
  modeChange: (value) =>
    set(() => ({
      mode: value,
    })),
}));

export default modalOpenState;
