import { CSSProperties, FC, ReactNode, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import useStore from "./useStore"
import "./index.scss"

export type Position = "top" | "bottom"

export interface MessageProps {
  style?: CSSProperties
  className?: string | string[]
  content: ReactNode
  duration?: number
  id?: number
  position?: Position
}

export const MessageProvider: FC<{}> = (props) => {
  const { messageList, add, update, remove, clearAll } = useStore("top")

  useEffect(() => {
    setInterval(() => {
      add({
        content: Math.random().toString().slice(2, 8)
      })
    }, 2000)
  }, [])

  const positions = Object.keys(messageList) as Position[]
  const messageWrapper = (
    <div className="message-wrapper">
      {positions.map((direction) => {
        return (
          <TransitionGroup
            className={`message-wrapper-${direction}`}
            key={direction}
          >
            {messageList[direction].map((item) => {
              return (
                <CSSTransition key={item.id} timeout={1000} className="message">
                  <div>
                    <div className="message-item">{item.content}</div>
                  </div>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
        )
      })}
    </div>
  )

  const el = useMemo(() => {
    const el = document.createElement("div")
    el.className = "wrapper"
    document.body.appendChild(el)
    return el
  }, [])

  return createPortal(messageWrapper, el)
}
