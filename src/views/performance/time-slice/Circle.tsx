import { useMemo } from "react"
import { Position } from "./DrawCircle"
import styles from "./index.module.scss"
const getColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgba(${r}, ${g}, ${b}, 0.8)`
}

const getPosition = (position: Position) => {
  const { width, height } = position
  return {
    left: Math.floor(Math.random() * (width - 10)),
    top: Math.floor(Math.random() * (height - 10))
  }
}

interface CircleProps {
  position: Position
}
function Circle({ position }: CircleProps) {
  const style = useMemo(() => {
    return {
      background: getColor(),
      ...getPosition(position)
    }
  }, [position])
  return <div style={style} className={styles.circle}></div>
}

export default Circle
