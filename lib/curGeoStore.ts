import { create } from "zustand";

interface CurGeoStore {
  latitude?: number;
  longitude?: number;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

const curGeoStore = create<CurGeoStore>((set) => ({
  latitude: undefined,
  setLatitude: (latitude) =>
    set(() => ({
      latitude,
    })),
  longitude: undefined,
  setLongitude: (longitude) =>
    set(() => ({
      longitude,
    })),
}));

export default curGeoStore;
