import { useState } from "react";

import { animated, useTransition } from "@react-spring/web";

import Button from "@/components/Button";

import styles from "../index.module.scss";

function Transition() {
  const [pages, setPages] = useState([
    { id: 1, label: "page1" },
    { id: 2, label: "page2" },
  ]);

  const transition = useTransition(pages, {
    from: { transform: "translate3d(100%,0,0)", opacity: 0 },
    enter: { transform: "translate3d(0%,0,0)", opacity: 1 },
    leave: { transform: "translate3d(-100%,0,0)", opacity: 0 },
  });

  const handleAddItem = () => {
    setPages([
      ...pages,
      { id: pages.length + 1, label: `page${pages.length + 1}` },
    ]);
  };

  const handleDeleteItem = (id: number) => {
    setPages(pages.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className={styles["transition-box"]}>
        {transition((style, item) => {
          return (
            <animated.div
              className={styles["transition-box-item"]}
              style={{ ...style }}
            >
              <div className={styles["transition-box-label"]}>{item.label}</div>
              <div
                className={styles["transition-box-del"]}
                onClick={() => handleDeleteItem(item.id)}
              >
                x
              </div>
            </animated.div>
          );
        })}
      </div>
      <Button onClick={handleAddItem}>Add</Button>
    </div>
  );
}

export default Transition;
