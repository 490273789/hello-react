import { CSSProperties, ReactElement, useState } from "react";
import { AnimatedProps, animated, useTransition } from "@react-spring/web";
import styles from "../index.module.scss";

interface PageItem {
  (props: AnimatedProps<{ style: CSSProperties }>): ReactElement;
}

const pages: PageItem[] = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage:
          "url(https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    ></animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage:
          "url(https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    ></animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        backgroundImage:
          "url(https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    ></animated.div>
  ),
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const transition = useTransition(index, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });

  const clickWrap = () => {
    setIndex((state) => (state + 1) % pages.length);
  };
  return (
    <div className={styles["transition-group-wrap"]} onClick={clickWrap}>
      {transition((style, i) => {
        const Page = pages[i];
        return <Page key={i} style={{ ...style }} />;
      })}
    </div>
  );
}

export default Carousel;
