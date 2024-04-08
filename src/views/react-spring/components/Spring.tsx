import { animated, useSpring } from '@react-spring/web';
import styles from '../index.module.scss';

const Spring = () => {
  /** 多个变量变化用useSpring */
  const [style, api] = useSpring(() => ({
    from: {
      width: 80,
      height: 40
    },
    // to: {
    //   width: 200,
    //   height: 200
    // },
    config: {
      // duration: 2000
      mass: 2,
      friction: 15,
      tension: 150
    }
  }));

  const handleBox2MouseEnter = () => {
    api.start({
      width: 400,
      height: 200
    });
  };
  const handleBox2MouseMove = () => {
    api.start({
      width: 80,
      height: 40
    });
  };
  return (
    <>
      <div className="comment_part">多个变量变化用useSpring</div>
      <animated.div
        className={styles.box2}
        style={{ ...style }}
        onMouseEnter={handleBox2MouseEnter}
        onMouseLeave={handleBox2MouseMove}
      />
    </>
  );
};

export default Spring;
