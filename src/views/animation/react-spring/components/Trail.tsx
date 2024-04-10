import { animated, useTrail } from "@react-spring/web"
import styles from "../index.module.scss"

const Trail = () => {
  const [trail, api] = useTrail(3, () => ({
    from: { width: 40 },
    config: { duration: 1000 }
  }))

  const handleMouseEnter = () => {
    api.start({ width: 300 })
  }
  const handleMouseLeave = () => {
    api.start({ width: 40 })
  }
  return (
    <>
      <div className="comment_part">多个元素不同步的情况使用useTrail</div>
      {trail.map((style, index) => (
        <animated.div
          className={styles["trail-box"]}
          style={style}
          key={index}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </>
  )
}

export default Trail
