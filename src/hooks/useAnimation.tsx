import { useCallback, useState } from "react"

export default function useAnimation(activeClass: string) {
  const [className, setClassName] = useState("")
  const toggle = useCallback(() => {
    if (className) setClassName("")
    else setClassName(activeClass)
  }, [className, activeClass])
  return [className, toggle] as const
}
