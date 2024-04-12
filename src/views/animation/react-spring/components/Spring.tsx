import { animated, useSpring } from "@react-spring/web"
import styles from "../index.module.scss"

const Spring = () => {
  /** 多个变量变化用useSpring */
  const [style, api] = useSpring(() => ({
    from: { width: 80, height: 40 },
    config: { mass: 2, friction: 15, tension: 150 }
  }))

  const handleBox2MouseEnter = () => {
    api.start({ width: 400, height: 100 })
  }
  const handleBox2MouseMove = () => {
    api.start({ width: 80, height: 40 })
  }
  return (
    <div className={styles["box-height"]}>
      <div className="comment_part">Q弹动画</div>
      <div className="comment_part">多个变量变化用useSpring</div>
      <div className="comment_desc">移入鼠标看效果</div>
      <animated.div
        className={styles["spring-box"]}
        style={{ ...style }}
        onMouseEnter={handleBox2MouseEnter}
        onMouseLeave={handleBox2MouseMove}
      />
    </div>
  )
}

export default Spring
