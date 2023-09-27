import { Address } from "@/components/sidebar/Searchmodal";
import { create } from "zustand";

interface PlacesStore {
  departures?: Address;
  arrivals?: Address;
  setDepartures: (departures: Address) => void;
  setArrivals: (arrivals: Address) => void;
}

const placesStore = create<PlacesStore>((set, get) => ({
  departures: undefined,
  setDepartures: (departures) =>
    set(() => ({
      departures,
    })),
  arrivals: undefined,
  setArrivals: (arrivals) =>
    set(() => ({
      arrivals,
    })),
}));

export default placesStore;
