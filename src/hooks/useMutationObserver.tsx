import { useEffect } from "react"

const defaultOptions = {
  childList: true,
  subtree: true,
  attributeFilter: ["className", "style"]
}

interface Options {
  childList: boolean
  subtree: boolean
  attributeFilter: string[]
}
function useMutationObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callBack: MutationCallback,
  options: Options = defaultOptions
) {
  useEffect(() => {
    if (!nodeOrList) return

    let instance: MutationObserver
    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList]
    if ("MutationObserver" in window) {
      instance = new MutationObserver(callBack)

      nodeList.forEach((node) => {
        instance.observe(node, options)
      })
    }
    return () => {
      instance.takeRecords()
      instance.disconnect()
    }
  }, [nodeOrList, options, callBack])
  return
}

export default useMutationObserver
