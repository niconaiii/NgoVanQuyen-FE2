import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: any;
  token: string | null;

  setUser: (data: { user: any; token: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: "quyennv",
      token: null,
      setUser: ({ user, token }) => {
        set({ user, token });
      },
      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: "user-storage",
    },
  ),
);
