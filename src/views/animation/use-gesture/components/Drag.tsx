import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import styles from "../index.module.scss";

function Drag() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });
  return (
    <>
      <div className="comment_desc">拽我</div>
      <animated.div
        className={styles["drag-box"]}
        {...bind()}
        style={{ x, y }}
      />
    </>
  );
}
export default Drag;
