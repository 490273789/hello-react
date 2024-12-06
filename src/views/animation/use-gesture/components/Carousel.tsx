import { useRef } from "react";
import { animated, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import styles from "../index.module.scss";
const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

interface CarouselProps {
  width: number;
}
function Carousel(props: CarouselProps) {
  const index = useRef(0);
  const [springs, api] = useSprings(pages.length, (i) => ({
    x: i * props.width,
    scale: 1,
  }));

  const bind = useDrag(
    ({ active, movement: [mx], direction: [dx], cancel }) => {
      if (active && Math.abs(mx) > props.width / 2) {
        let newIndex = index.current + (dx > 0 ? -1 : 1);
        if (newIndex < 0) {
          newIndex = 0;
        }

        if (newIndex > pages.length - 1) {
          newIndex = pages.length - 1;
        }
        index.current = newIndex;
        cancel();
      }
      api.start((i) => {
        const x = (i - index.current) * props.width + (active ? mx : 0);
        const scale = active ? 1 - Math.abs(mx) / props.width / 2 : 1;
        return { x, scale };
      });
    },
  );
  return (
    <div className={styles["carousel-box"]} style={{ width: props.width }}>
      {springs.map(({ x, scale }, i) => {
        return (
          <animated.div
            className={styles["carousel-page"]}
            {...bind()}
            key={i}
            style={{ x }}
          >
            <animated.div
              style={{ scale, backgroundImage: `url(${pages[i]})` }}
            ></animated.div>
          </animated.div>
        );
      })}
    </div>
  );
}

export default Carousel;
