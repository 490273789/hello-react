import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "@/components/Button";
import styles from "../index.module.scss";
import "./transition.scss";

function Transition() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <div className="comment_part">
        当 in 变为 true 的时候，会触发进入的动画，依次给元素加上
        .enter、.enter-active、.enter-done 的 className。
      </div>
      <CSSTransition in={flag} appear={true} timeout={1000}>
        <div className={styles.box1}></div>
      </CSSTransition>
      <Button onClick={() => setFlag(!flag)}>{flag ? "隐藏" : "显示"}</Button>
    </div>
  );
}

export default Transition;
