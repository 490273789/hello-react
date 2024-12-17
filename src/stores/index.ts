import { create } from "./zustand/index.js";
import { logger } from "@/views/zustand/middleware";

interface IStore {
  name: string;
  age: number;
  setName: (value: string) => void;
  setAge: (value: number) => void;
}

// create的参数是一个函数，这个函数有三个参数 setState, getState, store
const useStore = create<IStore>(
  logger((set) => ({
    name: "",
    age: 0,
    setName: (value: string) => set(() => ({ name: value })),
    setAge: (value: number) => set(() => ({ age: value })),
  })),
);

export default useStore;
