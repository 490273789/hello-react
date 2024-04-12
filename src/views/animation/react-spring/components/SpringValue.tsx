import { animated, useSpringValue } from "@react-spring/web"
import styles from "../index.module.scss"

const SpringValue = () => {
  /** 只有一个style变化可以用useSpringValue */
  const width = useSpringValue(20, {
    config: { mass: 2, friction: 10, tension: 200 }
  })
  return (
    <>
      <div className="comment_part">只有一个style变化可以用useSpringValue</div>
      <animated.div
        className={styles["spring-value-box"]}
        style={{ width }}
        onClick={() => width.start(300)}
      />
    </>
  )
}
export default SpringValue
