import { Ref, forwardRef, useEffect, useImperativeHandle, useMemo } from "react"
import { createPortal } from "react-dom"

interface CusPortalProps {
  attach?: HTMLElement | string
  children: React.ReactNode
}

function CusPortal(props: CusPortalProps, ref: Ref<HTMLElement>) {
  const { attach = document.body, children } = props

  const container = useMemo(() => {
    const el = document.createElement("div")
    el.className = "portal-wrapper"
    return el
  }, [])

  useEffect(() => {
    const parentElement = getAttachElement(attach)
    parentElement?.appendChild(container)

    return () => {
      parentElement?.removeChild(container)
    }
  }, [container, attach])

  useImperativeHandle(ref, () => container)

  return createPortal(children, container)
}

export default forwardRef(CusPortal)

export const getAttachElement = (attach: HTMLElement | string) => {
  if (typeof attach === "string") {
    return document.querySelector(attach)
  } else if (typeof attach === "object" && attach instanceof HTMLElement) {
    return attach
  }
  return document.body
}
