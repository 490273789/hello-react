import { useSyncExternalStore, useState, useEffect } from "react"
import { useDebugValue } from "react"

/** 创建store */
const createStore = (createState) => {
  /** 创建状态 */
  let state
  /** 创建监听
   * 每个监听的参数是当前状态和上次的状态
   */
  let listeners = new Set()

  /**
   * 这只状态
   * 设置完状态要执行监听
   * @param {*} partial
   * @param {*} replace
   */
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial
    if (!Object.is(nextState, state)) {
      const previousState = state
      console.log(replace ?? typeof nextState !== "object")
      state =
        replace ?? typeof nextState !== "object"
          ? nextState
          : Object.assign({}, state, nextState)
      listeners.forEach((listener) => listener(state, previousState))
    }
  }

  /** 获取状态 */
  const getState = () => state

  /** 添加一个监听 */
  const subscribe = (listener) => {
    listeners.add(listener)
  }

  /** 销毁监听 */
  const destroy = () => {
    listeners.clear()
  }
  const api = { setState, getState, subscribe, destroy }
  state = createState(setState, getState, api)
  console.log("初始化", state)
  return api
}

/** 处理使用store */
const useStore = (api, selector) => {
  // const [, forceRender] = useState(0);
  // useEffect(() => {
  //   api.subscribe((state, previousState) => {
  //     const newState = selector(state);
  //     const oldState = selector(previousState);
  //     if (newState !== oldState) forceRender(Math.random());
  //   });
  // }, []);
  // console.log(api.getState());
  // return selector(api.getState());

  // react18的实现方法
  // const slice = useSyncExternalStore(api.subscribe, api.getState, selector);
  // useDebugValue(slice);
  // console.log(slice);
  // return slice;

  function getState() {
    return selector(api.getState())
  }

  return useSyncExternalStore(api.subscribe, getState)
}

const createImpl = (createState) => {
  const api =
    typeof createState === "function" ? createStore(createState) : createState
  const useBoundStore = (selector) => useStore(api, selector)

  Object.assign(useBoundStore, api)
  return useBoundStore
}

/**
 * 创建一个状态库
 * @param {*} createState 创建状态的初始函数
 * @returns
 */
export const create = (createState) => createImpl(createState)
