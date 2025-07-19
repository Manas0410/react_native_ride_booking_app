import { create } from "zustand";
import { mmkvStorage } from "./storage";
import { persist, createJSONStorage } from "zustand/middleware";

type CustomLocation = {
  longitude: number;
  latitude: number;
  address: string;
} | null;

interface UserStoreProps {
  location: CustomLocation;
  user: any;
  outOfRange: boolean;
  setUser: (user: any) => void;
  setLocation: (location: CustomLocation) => void;
  setOutOfRange: (outOfRange: boolean) => void;
  clearData: () => void;
}

export const uaeUserStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      user: null,
      location: null,
      outOfRange: false,
      setUser: (user) => set({ user }),
      setLocation: (location) => set({ location }),
      setOutOfRange: (outOfRange) => set({ outOfRange }),
      clearData: () => set({ user: null, location: null, outOfRange: false }),
    }),
    {
      name: "user-store",
      partialize: (state) => ({ user: state.user }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
