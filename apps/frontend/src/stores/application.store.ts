import {create, UseBoundStore} from "zustand/react";
import {StoreApi} from "zustand/vanilla";

// Everything I need in zustand
export interface ZustandApplicationState {
    versionPopupShown: boolean
    toggleVersionPopup: () => void
}

export const useApplication: UseBoundStore<StoreApi<ZustandApplicationState>> = create((set) => ({
    versionPopupShown: false,
    toggleVersionPopup: () => set((state: ZustandApplicationState) => ({versionPopupShown: !state.versionPopupShown})),
}))