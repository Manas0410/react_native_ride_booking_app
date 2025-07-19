import { create } from "zustand";
import { mmkvStorage } from "./storage";
import { persist, createJSONStorage } from "zustand/middleware";

type CustomLocation = {
  longitude: number;
  latitude: number;
  address: string;
  heading: string;
} | null;

interface RiderStoreProps {
  location: CustomLocation;
  user: any;
  onDuty: boolean;
  setUser: (user: any) => void;
  setLocation: (location: CustomLocation) => void;
  setOnDuty: (onDuty: boolean) => void;
  clearRiderData: () => void;
}

export const uaeRiderStore = create<RiderStoreProps>()(
  persist(
    (set) => ({
      user: null,
      location: null,
      onDuty: false,
      setUser: (user) => set({ user }),
      setLocation: (location) => set({ location }),
      setOnDuty: (onDuty) => set({ onDuty }),
      clearRiderData: () => set({ user: null, location: null, onDuty: false }),
    }),
    {
      name: "rider-store",
      partialize: (state) => ({ user: state.user }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
