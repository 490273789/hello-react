import { animated, useSprings } from "@react-spring/web"
import styles from "../index.module.scss"

const Springs = () => {
  /** 多个元素用useSprings */
  const [springs, springsApi] = useSprings(3, () => ({
    from: { width: 80 },
    // to: { width: 200, height: 200 },
    config: { duration: 1000 }
  }))

  const handleBox3MouseEnter = () => {
    springsApi.start({ width: 400 })
  }
  const handleBox3MouseMove = () => {
    springsApi.start({ width: 80 })
  }
  return (
    <>
      <div className="comment_part">多个元素用useSprings</div>
      {springs.map((ele, index: number) => (
        <animated.div
          key={index}
          className={styles["springs-box"]}
          style={{ ...ele }}
          onMouseEnter={handleBox3MouseEnter}
          onMouseLeave={handleBox3MouseMove}
        />
      ))}
    </>
  )
}

export default Springs
