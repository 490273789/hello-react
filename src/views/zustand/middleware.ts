import { StateCreator } from "zustand"
export const logger = <T>(func: StateCreator<T, [], []>) => {
  return (setState, getState, store) => {
    const newSet = (...args) => {
      console.log("调用了set方法，state为：", getState())
      return setState(...args)
    }
    const newGet = (...args) => {
      console.log("调用了get方法，state为：", getState())
      return getState(...args)
    }
    return func(newSet, newGet, store)
  }
}
