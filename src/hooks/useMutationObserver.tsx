import { useEffect } from "react"

const defaultOptions = {
  childList: true,
  subtree: true,
  attributeFilter: ["class"]
}

export interface MutationObserverOptions {
  childList: boolean
  subtree: boolean
  attributeFilter: string[]
}
function useMutationObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callBack: MutationCallback,
  options: MutationObserverOptions = defaultOptions
) {
  useEffect(() => {
    if (!nodeOrList) return

    let instance: MutationObserver
    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList]
    if ("MutationObserver" in window) {
      instance = new MutationObserver(callBack)
      console.log("🚀 ~ nodeList.forEach ~ options:", options)
      nodeList.forEach((node) => {
        instance.observe(node, options)
      })
    }
    return () => {
      instance.takeRecords()
      instance.disconnect()
    }
  }, [nodeOrList, callBack, options])
  return
}

export default useMutationObserver
