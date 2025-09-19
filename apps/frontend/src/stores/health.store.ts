import {create, UseBoundStore} from "zustand/react";
import {StoreApi} from "zustand/vanilla";

// Everything I need in zustand
export interface HealthState {
    sex: string;
    height: number;
    weight: number;
    age: number;
    setSex: (sex: string) => void;
    setHeight: (height: number) => void;
    setWeight: (weight: number) => void;
    setAge: (age: number) => void;
}

export const useHealth: UseBoundStore<StoreApi<HealthState>> = create((set) => ({
    sex: Sex.Male,
    height: undefined,
    weight: undefined,
    age: undefined,
    setSex: (sex: string) => set((state: HealthState) => {
       return {...state, sex};
    }),
    setHeight: (height: number) => set((state: HealthState) => {
      return {...state, height};
    }),
    setWeight: (weight: number) => set((state: HealthState) => {
        return {...state, weight};
    }),
    setAge: (age: number) => set((state: HealthState) => {
        return {...state, age};
    }),
}));

export enum Sex {
    Male = 'Male',
    Female = 'Female'
}